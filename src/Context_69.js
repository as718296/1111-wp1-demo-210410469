import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  Children,
} from 'react';
import Reducer_69 from './Reducer_69';

// import cartItems from './data';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_69 = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  amount: 4,
  total: 999.9,
};

const AppProvider_69 = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer_69, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    console.log('cart', cart);
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext_69.Provider value={{ ...state, clearCart, increase }}>
      {children}
    </AppContext_69.Provider>
  );
};

const useGlobalContext_69 = () => {
  return useContext(AppContext_69);
};

export { AppProvider_69, useGlobalContext_69 };
