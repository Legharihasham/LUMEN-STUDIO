import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-stone-50 px-6">
       <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 shadow-sm">
         <h1 className="font-serif text-4xl mb-8 text-center">Contact Us</h1>
         
         <div className="grid md:grid-cols-2 gap-12 mb-12">
           <div>
             <h3 className="text-xs uppercase tracking-widest font-bold mb-2">Studio Address</h3>
             <p className="text-stone-600 text-sm leading-relaxed">
               142 Future Ave, Sector 7<br/>
               Creative District<br/>
               New York, NY 10012
             </p>
           </div>
           <div>
             <h3 className="text-xs uppercase tracking-widest font-bold mb-2">Inquiries</h3>
             <p className="text-stone-600 text-sm leading-relaxed">
               <a href="mailto:hello@lumen.studio" className="hover:text-black">hello@lumen.studio</a><br/>
               <a href="mailto:wholesale@lumen.studio" className="hover:text-black">wholesale@lumen.studio</a>
             </p>
           </div>
         </div>

         <form className="space-y-6">
           <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest text-stone-500">Name</label>
               <input type="text" className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
             </div>
             <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest text-stone-500">Email</label>
               <input type="email" className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-900 transition-colors" />
             </div>
           </div>
           <div className="space-y-2">
             <label className="text-xs uppercase tracking-widest text-stone-500">Subject</label>
             <select className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-900 transition-colors bg-transparent">
               <option>General Inquiry</option>
               <option>Custom Commission</option>
               <option>Order Support</option>
             </select>
           </div>
           <div className="space-y-2">
             <label className="text-xs uppercase tracking-widest text-stone-500">Message</label>
             <textarea rows={4} className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-900 transition-colors resize-none"></textarea>
           </div>
           
           <div className="pt-4">
             <button className="bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
               Send Message
             </button>
           </div>
         </form>
       </div>
    </div>
  );
};

export default Contact;
