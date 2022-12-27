import React from 'react';

// components
import Navbar_xx from './components/Navbar_xx';
import CartContainer_xx from './components/CartContainer_xx';
import { useGlobalContext_69 } from './Context_69';
// items

const App_xx = () => {
  const { loading, cart } = useGlobalContext_69();
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar_xx />
      <CartContainer_xx />
    </main>
  );
};

export default App_xx;
