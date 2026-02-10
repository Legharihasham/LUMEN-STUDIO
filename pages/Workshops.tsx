import React from 'react';
import { WORKSHOPS } from '../constants';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Workshops: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-stone-100 py-24 px-6 text-center">
        <h1 className="font-serif text-5xl mb-4">The Studio Workshops</h1>
        <p className="max-w-xl mx-auto text-stone-600">
          Master the craft. We host monthly sessions on lost-wax casting, 3D modelling for jewellery, and experimental fabrication.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {WORKSHOPS.map((workshop, idx) => (
          <div key={workshop.id} className="flex flex-col md:flex-row gap-8 items-start border-b border-stone-100 pb-12 last:border-0">
             <div className="w-full md:w-1/3 aspect-[4/3] bg-stone-200 overflow-hidden relative">
               <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                 Upcoming
               </div>
             </div>
             <div className="flex-1 space-y-4">
               <div className="flex flex-wrap gap-4 text-xs text-stone-500 uppercase tracking-widest">
                 <span className="flex items-center gap-1"><Calendar size={14}/> {workshop.date}</span>
                 <span className="flex items-center gap-1"><MapPin size={14}/> {workshop.location}</span>
               </div>
               <h2 className="font-serif text-3xl">{workshop.title}</h2>
               <p className="text-stone-600 leading-relaxed">
                 {workshop.description} This intensive session covers all fundamentals required to start your own practice. Materials and tools provided.
               </p>
               <div className="pt-4">
                 <a 
                   href={workshop.eventbriteLink} 
                   className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors"
                 >
                   Book on Eventbrite <ExternalLink size={14} />
                 </a>
               </div>
             </div>
          </div>
        ))}

        {/* Private Sessions */}
        <div className="bg-stone-50 p-8 md:p-12 text-center mt-12 border border-stone-200">
           <h3 className="font-serif text-2xl mb-4">Private Mentorship</h3>
           <p className="text-stone-600 text-sm max-w-lg mx-auto mb-8">
             We offer 1-on-1 mentorship for advanced designers looking to integrate digital fabrication into their workflow.
           </p>
           <a href="mailto:workshops@lumen.studio" className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all">
             Inquire via Email
           </a>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
