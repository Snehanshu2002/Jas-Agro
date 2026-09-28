const fs = require('fs');
const path = require('path'); 

// Target folder to scan (root of your project)
const ROOT_DIR = process.cwd();
// Name of the output file
const OUTPUT_FILE = path.join(ROOT_DIR, 'project_codebase.txt'); 

// Directories and files to completely ignore
const IGNORE_DIRS = new Set([
'node_modules',
'.next',
'out',
'.git',
'public',
'coverage',
'dist'
]); 

const IGNORE_FILES = new Set([
'package-lock.json',
'yarn.lock',
'pnpm-lock.yaml',
'.DS_Store',
'project_codebase.txt',
'bundle-code.js' // ignores itself
]); 

// Allowed extensions to look for
const ALLOWED_EXTENSIONS = new Set([
'.js', '.jsx', '.ts', '.tsx',
'.json', '.css', '.md', '.env',
'.local', '.config.js', '.config.ts'
]); 

let fileStructure = '';
let fileContents = ''; 

function scanDirectory(currentDir) {
const items = fs.readdirSync(currentDir); 

items.forEach(item => {
const fullPath = path.join(currentDir, item);
const relativePath = path.relative(ROOT_DIR, fullPath);
const stat = fs.statSync(fullPath);
if (stat.isDirectory()) {
    if (IGNORE_DIRS.has(item)) return;
    
    fileStructure += `[DIR]  ${relativePath}/\n`;
    scanDirectory(fullPath);
} else {
    if (IGNORE_FILES.has(item)) return;
    
    const ext = path.extname(item);
    // Also grab config files like next.config.js even if extension logic varies
    if (ALLOWED_EXTENSIONS.has(ext) || item.includes('config') || item.startsWith('.env')) {
        fileStructure += `[FILE] ${relativePath}\n`;
        
        fileContents += `\n========================================\n`;
        fileContents += `FILE: ${relativePath}\n`;
        fileContents += `========================================\n\n`;
        
        try {
            const content = fs.readFileSync(fullPath, 'utf-8');
            fileContents += content + '\n';
        } catch (err) {
            fileContents += `// Error reading file: ${err.message}\n`;
        }
    }
}

});

} 

console.log('Scanning project and bundling codebase...');
scanDirectory(ROOT_DIR); 

const finalOutput = `========================================
PROJECT DIRECTORY MAP

${fileStructure} 

${fileContents}`; 

fs.writeFileSync(OUTPUT_FILE, finalOutput, 'utf-8');
console.log(`Success! Your codebase has been bundled into: ${OUTPUT_FILE}`);