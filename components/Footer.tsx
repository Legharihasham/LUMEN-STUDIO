import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-white font-serif text-2xl tracking-wider">LUMEN</h3>
          <p className="text-sm leading-relaxed">
            Future-luxe artefacts designed for the void. <br/>
            Handcrafted in the studio.
          </p>
        </div>
        
        <div>
          <h4 className="text-white uppercase text-xs tracking-widest mb-6 font-semibold">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/shop" className="hover:text-white transition-colors">All Jewellery</a></li>
            <li><a href="/shop?category=Homewares" className="hover:text-white transition-colors">Homewares</a></li>
            <li><a href="/shop?category=Digital%20Files" className="hover:text-white transition-colors">Digital Files</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase text-xs tracking-widest mb-6 font-semibold">Partners</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Faire (Wholesale)</a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Cults3D (Files)</a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Etsy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase text-xs tracking-widest mb-6 font-semibold">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="mailto:hello@lumen.studio" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
          <p className="mt-8 text-xs text-stone-600">© {new Date().getFullYear()} Lumen Studio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
