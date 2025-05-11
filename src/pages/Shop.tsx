import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Product } from '../types';
import SectionHeading from '../components/shared/SectionHeading';
import ProductCard from '../components/ProductCard';
import { Filter, Search, X } from 'lucide-react';
import SEO from '../components/shared/SEO';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<'all' | 'vinyl' | 'merch'>('all');

  // Filter products based on search and section
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const sectionMatch = activeSection === 'all' ||
                          (activeSection === 'vinyl' && product.category === 'vinyl') ||
                          (activeSection === 'merch' && ['apparel', 'bundle'].includes(product.category));
      
      return searchMatch && sectionMatch;
    });
  }, [searchQuery, activeSection]);

  // Separate products by category
  const vinylProducts = useMemo(() => 
    filteredProducts.filter(product => product.category === 'vinyl'),
    [filteredProducts]
  );

  const merchProducts = useMemo(() => 
    filteredProducts.filter(product => ['apparel', 'bundle'].includes(product.category)),
    [filteredProducts]
  );

  return (
    <>
      <SEO 
        title="Shop - AMJ Official Store"
        description="Shop exclusive AMJ merchandise, vinyl records, and limited edition items. Official store with worldwide shipping."
      />
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
            subtitle="Limited edition vinyl records and exclusive merchandise"
          />
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
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
            
            {/* Section Tabs */}
            <div className="flex items-center space-x-2 bg-background-light p-1 rounded-lg">
              <button
                onClick={() => setActiveSection('all')}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeSection === 'all'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setActiveSection('vinyl')}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeSection === 'vinyl'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                Vinyl Records
              </button>
              <button
                onClick={() => setActiveSection('merch')}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeSection === 'merch'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                Merchandise
              </button>
            </div>
          </div>
          
          {/* Products Display */}
          {filteredProducts.length > 0 ? (
            <div className="space-y-16">
              {/* Vinyl Section */}
              {(activeSection === 'all' || activeSection === 'vinyl') && vinylProducts.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Vinyl Records</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {vinylProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )}
              
              {/* Merch Section */}
              {(activeSection === 'all' || activeSection === 'merch') && merchProducts.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Merchandise</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {merchProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )}
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
                  setActiveSection('all');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </motion.main>
    </>
  );
};

export default Shop;