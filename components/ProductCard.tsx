import React from 'react';
import { Product } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay Action */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
           {product.isDigital ? (
             <a href={product.externalLink} target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 text-xs uppercase tracking-widest font-semibold w-full text-center flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-white transition-colors">
               View on Cults3D <ArrowUpRight size={14} />
             </a>
           ) : (
             <button className="bg-white text-black px-4 py-2 text-xs uppercase tracking-widest font-semibold w-full hover:bg-stone-900 hover:text-white transition-colors">
               Add to Cart
             </button>
           )}
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-serif text-lg leading-none group-hover:underline decoration-stone-300 underline-offset-4">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-xs uppercase tracking-widest text-stone-500">{product.category}</p>
        <p className="font-medium text-sm mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
