# JAS AGRO — MEDIA ASSET ARCHITECTURE & DIRECTORY GUIDE

This directory organizes all high-resolution imagery and cinematic video loops for the **JAS Agro** website.

## Directory Structure

```text
public/media/
├── hero/
│   ├── hero-video.mp4          # High-definition looping video background (4K/1080p, 60fps)
│   ├── hero-video-mobile.mp4   # Optimized mobile looping video (720p/1080p compressed)
│   └── hero-poster.jpg         # High-res fallback poster image for slow networks / reduced motion
├── mushroom/
│   ├── oyster-cultivation.jpg  # Indoor climate-controlled mushroom cultivation room
│   └── spore-mist.mp4          # Micro-mist fogging video loop
├── azolla/
│   └── aquatic-fodder.jpg      # Nitrogen-fixing Azolla pond culture
├── napier/
│   └── super-napier-grass.jpg  # High-biomass perennial Napier grass field
├── vermicompost/
│   └── organic-humus.jpg       # Earthworm bio-conversion topsoil
├── iot/
│   ├── telemetry-nodes.jpg     # ESP32 sensor probe node hardware
│   └── automation-relay.jpg    # Smart fogger & ventilation actuator relay
└── showcase/
    ├── gorakhpur-estate.jpg    # Real-world project showcase 01
    ├── karnal-dairy.jpg        # Real-world project showcase 02
    └── patna-farm.jpg          # Real-world project showcase 03
```

## Recommended AI Image & Video Generation Prompts

### 1. Hero Video / Image Generation Prompt:
> *"Cinematic photorealistic 8k video of a modern indoor smart agriculture facility, oyster mushroom cultivation bags with gentle floating spore mist, soft morning sunlight beams through glass greenhouse roof, subtle green ambient lighting, professional agricultural documentary aesthetic, depth of field, photorealistic textures."*

### 2. Video Performance Guidelines:
- **Encoding**: H.264 / MP4 or WebM format.
- **Attributes**: Must run `muted`, `playsInline`, `loop`.
- **Target File Size**: Desktop < 8 MB, Mobile < 3 MB.
