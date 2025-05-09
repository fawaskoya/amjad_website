import React from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="card-hover group relative overflow-hidden flex flex-col"
    >
      <div className="relative overflow-hidden rounded-lg bg-background-lighter">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Status badges */}
        {product.isLimitedEdition && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            LIMITED EDITION
          </div>
        )}
        
        {product.isSoldOut && (
          <div className="absolute top-3 right-3 bg-error text-white text-xs font-bold px-2 py-1 rounded">
            SOLD OUT
          </div>
        )}
        
        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            className="btn-primary text-sm"
            disabled={product.isSoldOut}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="font-heading text-xl font-semibold text-white">
          <Link to={`/shop/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <div className="mt-2 mb-3 flex items-center">
          <div className="flex text-warning">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4" />
          </div>
          <span className="ml-2 text-sm text-text-secondary">4.0 (24)</span>
        </div>
        
        <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
          
          <Link to={`/shop/product/${product.id}`} className="text-primary hover:text-secondary text-sm font-medium transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;