import { Suspense, lazy, memo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts - Keep these as regular imports since they're used on every page
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Lazy load pages for better initial load time
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Music = lazy(() => import('./pages/Music'));
const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Memoize ScrollToTop to prevent unnecessary re-renders
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
});

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Memoize the main App component
const App = memo(() => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetail />} />
            <Route path="/music" element={<Music />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </Router>
  );
});

App.displayName = 'App';
ScrollToTop.displayName = 'ScrollToTop';

export default App;