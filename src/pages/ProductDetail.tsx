import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Product } from '../types';
import { ArrowLeft, ShoppingBag, Star, Truck, RefreshCcw, Shield } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Initialize selected options
      const initialOptions: Record<string, string> = {};
      if (foundProduct.options) {
        foundProduct.options.forEach(option => {
          if (option.values.length > 0) {
            initialOptions[option.name] = option.values[0];
          }
        });
      }
      setSelectedOptions(initialOptions);
    }
  }, [id]);
  
  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="flex items-center text-text-secondary hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <div className="relative bg-background-lighter rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
                
                {/* Status badges */}
                {product.isLimitedEdition && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-md">
                    LIMITED EDITION
                  </div>
                )}
                
                {product.isSoldOut && (
                  <div className="absolute top-4 right-4 bg-error text-white text-sm font-bold px-3 py-1 rounded-md">
                    SOLD OUT
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-warning mr-2">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-text-secondary">4.0 (24 reviews)</span>
              </div>
              
              <div className="text-2xl font-bold text-white mb-6">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-text-secondary mb-8">
                {product.description}
              </p>
              
              {/* Product Options */}
              {product.options?.map((option) => (
                <div key={option.name} className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-3">
                    {option.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleOptionChange(option.name, value)}
                        className={`px-4 py-2 border rounded-md transition-colors ${
                          selectedOptions[option.name] === value
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-gray-700 text-text-secondary hover:border-primary'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-3">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-2 bg-background-lighter text-white rounded-l-md border border-gray-700"
                    disabled={product.isSoldOut}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 px-3 py-2 bg-background-light text-center text-white border-t border-b border-gray-700 focus:outline-none"
                    disabled={product.isSoldOut}
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 bg-background-lighter text-white rounded-r-md border border-gray-700"
                    disabled={product.isSoldOut}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <div className="mb-8">
                <button
                  className="w-full btn-primary py-4"
                  disabled={product.isSoldOut}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
                </button>
              </div>
              
              {/* Shipping & Returns */}
              <div className="border-t border-gray-700 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Free Shipping</h4>
                    <p className="text-text-secondary text-sm">
                      On all orders over $50. International shipping available.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RefreshCcw className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">30-Day Returns</h4>
                    <p className="text-text-secondary text-sm">
                      Not satisfied? Return within 30 days for a full refund.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-white">Secure Checkout</h4>
                    <p className="text-text-secondary text-sm">
                      Your payment information is processed securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ProductDetail;