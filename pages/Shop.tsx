import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Category } from '../types';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'All');

  useEffect(() => {
    setActiveCategory(categoryParam || 'All');
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop</h1>
        <p className="text-stone-500 mb-12 max-w-2xl">
          Explore our collection of handcrafted jewellery, artefacts, and digital assets.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-stone-200 pb-6 sticky top-20 bg-stone-50/95 backdrop-blur-sm z-30 py-4 -mx-6 px-6">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`text-sm uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
              activeCategory === 'All' 
                ? 'bg-stone-900 text-white border-stone-900' 
                : 'border-stone-200 text-stone-500 hover:border-stone-900 hover:text-stone-900'
            }`}
          >
            All
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-sm uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat 
                  ? 'bg-stone-900 text-white border-stone-900' 
                  : 'border-stone-200 text-stone-500 hover:border-stone-900 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-stone-400">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
