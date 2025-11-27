import React, { useState, useRef, useEffect } from 'react';
import { generateCageResponse } from '../services/geminiService';
import { Message } from '../types';

const AskCage: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'I am here. Ask me about sound, mushrooms, or life.' }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await generateCageResponse(input);
    
    setMessages(prev => [
      ...prev,
      { id: (Date.now() + 1).toString(), role: 'model', text: responseText }
    ]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-zinc-950 border border-zinc-800 h-[600px]">
      
      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-sm">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`mb-6 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-4 rounded-sm ${
                msg.role === 'user' 
                  ? 'bg-zinc-800 text-white' 
                  : 'bg-transparent text-zinc-300 border-l-2 border-white pl-4'
              }`}
            >
              <span className="block text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">
                  {msg.role === 'user' ? 'Observer' : 'Cage'}
              </span>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
           <div className="flex justify-start mb-6">
              <div className="text-zinc-500 animate-pulse pl-4 border-l-2 border-zinc-500 font-mono text-xs">
                 [ Consults the I Ching... ]
              </div>
           </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="border-t border-zinc-800 bg-zinc-900 p-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent border-none p-3 text-white focus:ring-0 outline-none font-mono text-sm"
          disabled={loading}
        />
        <button 
          type="submit"
          disabled={loading || !input.trim()}
          className="px-6 py-2 bg-white text-black font-bold hover:bg-zinc-200 disabled:opacity-50 transition-colors uppercase text-xs tracking-wider"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AskCage;