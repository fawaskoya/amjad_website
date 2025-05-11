import { ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/slices/cartSlice';
import { RootState } from '../../store';

const CartButton = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={() => dispatch(toggleCart())}
      className="relative p-2 text-text-primary hover:text-primary transition-colors"
      aria-label="Shopping cart"
    >
      <ShoppingBag className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton; 