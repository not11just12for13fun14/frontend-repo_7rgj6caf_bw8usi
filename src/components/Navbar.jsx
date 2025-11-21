import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold shadow-lg">
              B
            </div>
            <span className="text-white font-semibold tracking-wide">BuildStone Co.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="tel:+15550102020" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200">
              <Phone size={16}/> +1 (555) 010‑2020
            </a>
            <a href="mailto:info@buildstone.co" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200">
              <Mail size={16}/> info@buildstone.co
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 flex flex-col gap-3 text-slate-200">
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
            <a href="#services" onClick={()=>setOpen(false)}>Services</a>
            <a href="#products" onClick={()=>setOpen(false)}>Products</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
