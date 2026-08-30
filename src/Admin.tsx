import React, { useState } from 'react';
import { Copy, Link, Send } from 'lucide-react';

export default function Admin() {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  const baseUrl = window.location.origin;
  const generatedLink = guestName.trim()
    ? `${baseUrl}/?p=${encodeURIComponent(prefix)}&n=${encodeURIComponent(guestName.trim())}`
    : baseUrl;

  const generatedMessage = `Dear ${prefix} ${guestName.trim()} ❤️

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${generatedLink}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ Geeshan & Nipuni`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="h-[100dvh] w-full overflow-y-auto bg-[#fdfaf5] font-montserrat relative smooth-mobile-scroll">
      <div className="min-h-full flex flex-col items-center justify-center p-4 py-12 md:p-12 relative">
        <div className="absolute inset-0 opacity-[0.03] paper-grain pointer-events-none" />
        
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-theme-200 overflow-hidden relative z-10 p-6 sm:p-8 md:p-12">
        
        <div className="text-center mb-10">
          <h1 className="font-playball text-4xl text-theme-800 mb-2">Link Generator</h1>
          <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Nipuni & Geeshan's Wedding</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 md:flex-none md:w-1/3">
              <label className="block text-xs font-bold text-stone-600 uppercase tracking-widest mb-2">Prefix</label>
              <select
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-theme-200 bg-stone-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-theme-400 focus:border-transparent transition-all"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                <option value="Mr. & Mrs.">Mr. & Mrs.</option>
                <option value="Family">Family</option>
                <option value="Dear">Dear</option>
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-xs font-bold text-stone-600 uppercase tracking-widest mb-2">Guest Name</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="w-full px-4 py-3 rounded-xl border border-theme-200 bg-stone-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-theme-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-theme-100">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-widest mb-4">Generated Preview</label>
            <div className="bg-stone-50 p-6 rounded-2xl border border-theme-200 text-sm text-stone-600 whitespace-pre-wrap font-sans">
              {guestName.trim() ? generatedMessage : 'Enter a guest name to see the preview...'}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={copyLink}
              disabled={!guestName.trim()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white border-2 border-theme-300 text-theme-800 font-bold uppercase tracking-wider text-xs hover:bg-theme-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Link size={16} />
              {copiedLink ? 'Copied!' : 'Copy Link Only'}
            </button>
            <button
              onClick={copyMessage}
              disabled={!guestName.trim()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-theme-800 text-white font-bold uppercase tracking-wider text-xs hover:bg-theme-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
              {copiedMsg ? 'Copied!' : 'Copy Full Message'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
