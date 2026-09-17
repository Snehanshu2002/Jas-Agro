"use client";

import React, { useState, useEffect, useRef } from "react";
import { Bot, Sparkles, X, Send, ChevronRight, RefreshCw, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export const AgriAiAssistant: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isHindi = language === "hi";

  const quickPrompts = isHindi
    ? [
        "Oyster Mushroom के लिए Temperature और Humidity कितनी चाहिए?",
        "50 Dairy Cows के लिए daily Azolla fodder की कितनी मात्रा चाहिए?",
        "Hybrid Napier Grass की per acre कितनी yield होती है?",
        "1000 sq ft farm के लिए IoT Sensor setup की cost क्या है?",
        "Vermicompost के मुख्य organic benefits क्या हैं?",
      ]
    : [
        "What temperature & humidity does oyster mushroom cultivation require?",
        "How much Azolla feeding quantity is needed for 50 dairy cattle?",
        "What is the expected yield per acre for Hybrid Napier grass?",
        "What IoT sensor setup is recommended for a 1000 sq ft farm?",
        "What are the key organic topsoil benefits of Vermicompost?",
      ];

  const initialMessage: ChatMessage = {
    id: "welcome",
    sender: "ai",
    text: isHindi
      ? "Hello! मैं आपका 'Ask JAS Agro AI' Assistant हूँ। आप Oyster Mushroom, Azolla Fodder, Napier Grass, Vermicompost या IoT Farm Automation के बारे में कोई भी सवाल पूछ सकते हैं।"
      : "Hello! I am your 'Ask JAS Agro AI' assistant. Feel free to ask me about Oyster Mushrooms, Azolla Fodder, Napier Grass, Vermicompost or IoT Farm Automation.",
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  };

  useEffect(() => {
    setMessages([initialMessage]);
  }, [language]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const generateAiReply = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("mushroom") || q.includes("मशरूम") || q.includes("temperature") || q.includes("humidity")) {
      return isHindi
        ? "Oyster Mushroom के लिए ideal Temperature 20°C-28°C और Relative Humidity 80%-90% होनी चाहिए। हमारा IoT Smart Controller foggers & fans को automatic maintain रखता है!"
        : "For Oyster Mushroom cultivation, the ideal temperature is 20°C - 28°C and relative humidity should be maintained at 80% - 90%. Our IoT Smart Controller automates foggers & fans to maintain this climate!";
    }

    if (q.includes("azolla") || q.includes("अजोला") || q.includes("cattle") || q.includes("गाय") || q.includes("feed")) {
      return isHindi
        ? "50 Dairy Cattle के लिए 1.5 - 2.0 kg fresh Azolla per cow daily दें। इससे milk yield 10-15% बढ़ता है और feed cost 20-25% घटती है।"
        : "For 50 dairy cattle, feed 1.5 - 2.0 kg of fresh Azolla per cow daily. This boosts milk yield by 10-15% and cuts concentrated feed costs by 20-25%.";
    }

    if (q.includes("napier") || q.includes("नेपियर") || q.includes("acre") || q.includes("एकड़")) {
      return isHindi
        ? "Hybrid Napier Grass per acre per year 150 - 200 Tons green fodder देती है। यह 4-5 सालों तक continuous harvests देती है।"
        : "Hybrid Napier Grass yields 150 - 200 Tons per acre annually for 4-5 continuous years with 6-8 harvests each year.";
    }

    if (q.includes("iot") || q.includes("sensor") || q.includes("1000")) {
      return isHindi
        ? "1000 sq ft facility के लिए JAS Agro IoT System में Air Temp/Humidity Sensor Nodes, Soil Moisture Sensors, Automated Relay Controller और Mobile Dashboard शामिल हैं।"
        : "For a 1000 sq ft facility, the JAS Agro IoT System includes Air Temp/Humidity Sensor Nodes, Soil Moisture Sensors, Automated Relay Controller, and Mobile Telemetry.";
    }

    if (q.includes("vermicompost") || q.includes("वर्मीकंपोस्ट") || q.includes("benefit") || q.includes("लाभ")) {
      return isHindi
        ? "JAS Agro Vermicompost soil organic carbon सुधारता है, moisture retention बढ़ाता है और micronutrients की availability 40% तक बढ़ाता है।"
        : "JAS Agro Vermicompost restores soil organic carbon, enhances water retention capacity, and improves micronutrient availability by up to 40%.";
    }

    return isHindi
      ? `आपके सवाल "${query}" का जवाब देने के लिए हमारी AgTech Experts team तैयार है। Free consultation के लिए 'Get a Quote' पर click करें!`
      : `Thank you for asking about "${query}". Our AgTech specialists can customize a project plan for you. Feel free to click 'Get a Quote'!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReplyText = generateAiReply(text);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <>
      {/* Floating Orb Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-white shadow-glow-lg border border-emerald-300/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Ask JAS Agro AI"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping" />
          <div className="relative flex items-center justify-center">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <div className="relative">
                <Bot className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
                <Sparkles className="w-4 h-4 text-amber-300 absolute -top-1.5 -right-2 animate-pulse" />
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Chat Conversational Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[580px] h-[80vh] flex flex-col rounded-3xl bg-[#0B0F17]/95 border border-emerald-500/40 shadow-2xl backdrop-blur-2xl text-slate-100 overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-slate-900 border-b border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 shadow-glow">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-white text-base flex items-center gap-2">
                  Ask JAS Agro AI <Sparkles className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-[11px] font-mono text-emerald-400 font-medium">
                  • {isHindi ? "ऑनलाइन • स्मार्ट एग्री सलाहकार" : "Online • Smart AgTech Assistant"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed shadow-lg ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none border border-emerald-400/30"
                      : "bg-slate-900 text-slate-100 border border-slate-800 rounded-bl-none shadow-glass"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 w-fit">
                <RefreshCw className="w-4 h-4 text-emerald-400 animate-spin" />
                <span className="text-xs text-slate-400 font-mono">Analyzing query...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-3 bg-slate-950/90 border-t border-slate-800 space-y-2">
            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider px-1">
              {isHindi ? "सुझाए गए प्रश्न:" : "Suggested AgTech Questions:"}
            </p>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-none">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 transition-all text-left flex items-center justify-between gap-1.5 cursor-pointer group"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={isHindi ? "मशरूम, अजोला या IoT ऑटोमेशन पूछें..." : "Ask JAS Agro AI..."}
              className="flex-1 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all font-mono"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputMsg.trim()}
              className="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white disabled:opacity-40 shadow-glow transition-all cursor-pointer"
              aria-label="Send Query"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
