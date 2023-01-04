import React from 'react';

// components
import Navbar_69 from './components/Navbar_69';
import { useGlobalContext_69 } from './Context_69';
import CartContainer_69 from './components/CartContainer_69';
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
      <Navbar_69 />
      <CartContainer_69 />
    </main>
  );
};

export default App_xx;
