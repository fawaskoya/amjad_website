import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, CheckCircle } from 'lucide-react';

const steps = [
  { id: 'shipping', label: 'Shipping', icon: Truck },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'confirmation', label: 'Confirmation', icon: CheckCircle },
];

const Checkout = memo(() => {
  const { items } = useSelector((state: RootState) => state.cart);
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const [currentStep, setCurrentStep] = useState('shipping');
  const [formData, setFormData] = useState({
    shipping: {
      fullName: '',
      email: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
    },
    payment: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: '',
    },
  });

  const handleInputChange = (step: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setCurrentStep('confirmation');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'shipping':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.shipping.fullName}
                  onChange={(e) => handleInputChange('shipping', 'fullName', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.shipping.email}
                  onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Address</label>
                <input
                  type="text"
                  required
                  value={formData.shipping.address}
                  onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  required
                  value={formData.shipping.city}
                  onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <input
                  type="text"
                  required
                  value={formData.shipping.country}
                  onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Postal Code</label>
                <input
                  type="text"
                  required
                  value={formData.shipping.postalCode}
                  onChange={(e) => handleInputChange('shipping', 'postalCode', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Continue to Payment
            </button>
          </form>
        );

      case 'payment':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  value={formData.payment.cardNumber}
                  onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    value={formData.payment.expiryDate}
                    onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    value={formData.payment.cvv}
                    onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Name on Card</label>
                <input
                  type="text"
                  required
                  value={formData.payment.nameOnCard}
                  onChange={(e) => handleInputChange('payment', 'nameOnCard', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background-light border border-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Complete Purchase
            </button>
          </form>
        );

      case 'confirmation':
        return (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Thank You for Your Order!</h2>
            <p className="text-text-secondary mb-8">
              Your order has been received and is being processed. You will receive an email confirmation shortly.
            </p>
            <div className="bg-background-light rounded-lg p-6 mb-8">
              <h3 className="font-medium mb-4">Order Summary</h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-background-light pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = steps.findIndex(s => s.id === currentStep) >= index;
              
              return (
                <div key={step.id} className="flex-1 relative">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        isActive ? 'bg-primary text-white' : 'bg-background-light text-text-secondary'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-sm ${isActive ? 'text-primary' : 'text-text-secondary'}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        isActive ? 'bg-primary' : 'bg-background-light'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Back Button */}
          {currentStep !== 'confirmation' && (
            <button
              onClick={() => setCurrentStep(currentStep === 'payment' ? 'shipping' : 'payment')}
              className="flex items-center text-text-secondary hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </button>
          )}

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
});

Checkout.displayName = 'Checkout';

export default Checkout; 