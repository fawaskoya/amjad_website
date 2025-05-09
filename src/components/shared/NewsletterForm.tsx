import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    
    // Simulate API call
    setStatus('success');
    setMessage('Thank you for subscribing!');
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="input-field pr-12"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-white p-2 rounded-full transition-colors hover:bg-primary"
            aria-label="Subscribe"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        {status !== 'idle' && (
          <p 
            className={`text-sm ${
              status === 'success' ? 'text-success' : 'text-error'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;