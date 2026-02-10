import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS, WORKSHOPS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  // Get featured products (first 4)
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-300">
           <img 
            src="https://picsum.photos/id/111/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-90"
           />
           <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-tighter mb-6">
            FUTURE ARTEFACTS
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-12 max-w-lg mx-auto">
            Handcrafted jewellery & digital couture for the modern void.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-3 border border-white px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-black transition-all"
          >
            Shop Jewellery <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CATEGORY BLOCK */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
           <h2 className="font-serif text-3xl md:text-4xl text-stone-900">Collections</h2>
           <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-black transition-colors">View All</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <Link 
              key={cat} 
              to={`/shop?category=${cat}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-200"
            >
              <img 
                src={`https://picsum.photos/id/${150 + idx}/400/600`} 
                alt={cat}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                <span className="bg-white/90 px-4 py-2 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm">
                  {cat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-stone-900 text-stone-200 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">The Manifesto</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            "We build intervention jackets for the soul and armour for the digital age. 
            Every piece is a collision of craft and future-tech."
          </h2>
          <div className="pt-8">
             <Link to="/about" className="text-sm border-b border-stone-600 pb-1 hover:text-white hover:border-white transition-all">
               Read Our Story
             </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Latest Editions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {featuredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/shop" className="bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
            Shop All
          </Link>
        </div>
      </section>

      {/* WORKSHOPS BLOCK */}
      <section className="py-24 px-6 border-t border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-2">The Studio Workshops</h2>
              <p className="text-stone-500 max-w-md">Join us in the studio or online to learn the craft of future-luxe design.</p>
            </div>
            <Link to="/workshops" className="text-xs uppercase tracking-widest border-b border-stone-300 pb-1 hover:border-black transition-colors">View Schedule</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WORKSHOPS.map(workshop => (
              <div key={workshop.id} className="flex gap-6 items-center group cursor-pointer bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-200 shrink-0 overflow-hidden">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">{workshop.date} — {workshop.location}</p>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-stone-600 transition-colors">{workshop.title}</h3>
                  <span className="text-xs underline underline-offset-4">Register on Eventbrite</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
