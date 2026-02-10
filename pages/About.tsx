import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <span className="block text-center text-xs uppercase tracking-[0.3em] text-stone-400 mb-8">Est. 2024</span>
        <h1 className="font-serif text-4xl md:text-6xl text-center leading-tight mb-16">
          LUMEN is a design practice exploring the intersection of ancient craft and future technology.
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 text-stone-600 leading-relaxed font-serif text-lg">
            <p>
              Founded by lead designer Alex V., the studio operates as a laboratory for aesthetic experimentation. We believe that objects are not merely possessions, but extensions of the self.
            </p>
            <p>
              Our jewellery is forged using traditional silversmithing techniques, while our homewares and accessories often utilize 3D printing and generative design algorithms. This hybrid approach allows us to create forms that feel both organic and alien.
            </p>
          </div>
          <div className="aspect-[4/5] bg-stone-100">
             <img src="https://picsum.photos/id/400/800/1000" alt="Studio Hands" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="border-t border-stone-100 pt-16">
           <h2 className="text-center font-serif text-3xl mb-12">The Process</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-serif italic">1</div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2">Digital Genesis</h3>
                <p className="text-sm text-stone-500">Forms are born in code, sculpted in virtual reality, and refined through simulation.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-serif italic">2</div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2">Material Alchemy</h3>
                <p className="text-sm text-stone-500">We cast in recycled sterling silver and 14k gold, ensuring ethical sourcing.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-serif italic">3</div>
                <h3 className="uppercase tracking-widest text-xs font-bold mb-2">Hand Finishing</h3>
                <p className="text-sm text-stone-500">Every piece is hand-polished, oxidized, and inspected in our studio.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
