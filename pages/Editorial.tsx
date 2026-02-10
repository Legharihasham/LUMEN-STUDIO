import React from 'react';
import { ArrowRight } from 'lucide-react';

const Editorial: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Editorial Hero */}
      <div className="h-screen w-full relative">
        <img 
          src="https://picsum.photos/id/230/1920/1080" 
          alt="Intervention Jacket" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 md:p-16">
           <h1 className="text-white font-serif text-6xl md:text-9xl leading-none mb-4">
             THE <br/> INTERVENTION <br/> JACKET
           </h1>
           <p className="text-white/80 uppercase tracking-widest text-sm max-w-sm">
             Project 001 — A study in protection and exposure.
           </p>
        </div>
      </div>

      {/* Story Section 1 */}
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <p className="font-serif text-2xl md:text-4xl leading-relaxed text-stone-800">
          "The Intervention Jacket is not just a garment. It is a shelter. Designed for the urban nomad, it integrates modular storage with reactive fabrics that change state based on environmental stress."
        </p>
      </div>

      {/* Visual Break */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <img src="https://picsum.photos/id/231/900/1200" alt="Detail 1" className="w-full h-full object-cover" />
        <div className="bg-stone-100 p-12 md:p-24 flex flex-col justify-center">
           <span className="text-xs uppercase tracking-widest text-stone-500 mb-4">Fabrication</span>
           <h3 className="font-serif text-3xl mb-6">Ballistic Nylon & Silk</h3>
           <p className="text-stone-600 leading-relaxed mb-8">
             Contrasting textures represent the duality of the modern experience. Hard exterior, soft interior. The jacket features 12 hidden pockets for digital tools and physical artefacts.
           </p>
           <ul className="space-y-4 border-t border-stone-200 pt-8 text-sm text-stone-600">
             <li className="flex justify-between"><span>Weight</span> <span>1.2kg</span></li>
             <li className="flex justify-between"><span>Material</span> <span>Tech-Silk / Nylon</span></li>
             <li className="flex justify-between"><span>Origin</span> <span>Studio Handmade</span></li>
           </ul>
        </div>
      </div>

       {/* Full Width Quote */}
       <div className="py-32 px-6 bg-stone-900 text-white text-center">
         <blockquote className="font-serif text-3xl md:text-5xl italic max-w-5xl mx-auto">
           "A masterpiece of utilitarian luxury. The Intervention Jacket redefines what it means to wear art."
         </blockquote>
         <cite className="block mt-8 text-xs uppercase tracking-widest not-italic text-stone-500">— Future Fashion Weekly</cite>
       </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 h-[600px] w-full">
         <img src="https://picsum.photos/id/232/600/600" alt="Gallery 1" className="w-full h-full object-cover" />
         <img src="https://picsum.photos/id/233/600/600" alt="Gallery 2" className="w-full h-full object-cover hidden md:block" />
         <img src="https://picsum.photos/id/234/600/600" alt="Gallery 3" className="w-full h-full object-cover" />
      </div>

      {/* CTA */}
      <div className="py-32 text-center">
         <h2 className="font-serif text-4xl mb-6">Own the Piece</h2>
         <p className="text-stone-500 mb-8">Limited run of 50 units worldwide.</p>
         <button className="bg-stone-900 text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors inline-flex items-center gap-2">
           Pre-Order Now <ArrowRight size={16} />
         </button>
      </div>
    </div>
  );
};

export default Editorial;
