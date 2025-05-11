import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { trackEcommerceEvent } from '../../utils/analytics';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  options?: Record<string, string>;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id && 
        JSON.stringify(item.options) === JSON.stringify(action.payload.options)
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      // Track add to cart event
      trackEcommerceEvent('add_to_cart', [{
        item_id: action.payload.id,
        item_name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity
      }]);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        // Track remove from cart event
        trackEcommerceEvent('remove_from_cart', [{
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        }]);
      }
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        const oldQuantity = item.quantity;
        item.quantity = action.payload.quantity;
        
        // Track quantity change event
        if (oldQuantity !== action.payload.quantity) {
          trackEcommerceEvent('update_cart_quantity', [{
            item_id: item.id,
            item_name: item.name,
            price: item.price,
            quantity: action.payload.quantity - oldQuantity
          }]);
        }
      }
    },
    clearCart: (state) => {
      // Track clear cart event
      if (state.items.length > 0) {
        trackEcommerceEvent('clear_cart', state.items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        })));
      }
      state.items = [];
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer; 