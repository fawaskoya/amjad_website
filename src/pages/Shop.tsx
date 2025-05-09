import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Product } from '../types';
import SectionHeading from '../components/shared/SectionHeading';
import ProductCard from '../components/shared/ProductCard';
import { Filter, Search, X } from 'lucide-react';

const Shop: React.FC = () => {
  // Filter and search states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Categories derived from products
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'vinyl', label: 'Vinyl' },
    { id: 'apparel', label: 'Apparel' },
    { id: 'digital', label: 'Digital' },
    { id: 'bundle', label: 'Bundles' },
  ];
  
  // Filter products based on category and search
  const filteredProducts = products.filter((product: Product) => {
    // Filter by category
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    
    // Filter by search query
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Shop"
          subtitle="Limited edition vinyl records, apparel, and digital downloads"
        />
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          {/* Search */}
          <div className="w-full md:w-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full md:w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Filter Toggle (Mobile) */}
          <div className="md:hidden w-full">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full btn-outline flex items-center justify-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          {/* Categories (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-background-lighter text-text-secondary hover:bg-background-light'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Categories (Mobile) */}
        {showFilters && (
          <div className="md:hidden mb-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-background-lighter text-text-secondary hover:bg-background-light'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}
        
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">No products found</h3>
            <p className="text-text-secondary mb-6">
              We couldn't find any products matching your search criteria.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </motion.main>
  );
};

export default Shop;