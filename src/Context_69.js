import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  Children,
} from 'react';
import Reducer_69 from './Reducer_69';

import cartItems from './data';

const AppContext_69 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 4,
  total: 999.9,
};

const AppProvider_69 = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer_69, initialState);
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <AppContext_69.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext_69.Provider>
  );
};

const useGlobalContext_69 = () => {
  return useContext(AppContext_69);
};

export { AppProvider_69, useGlobalContext_69 };
