import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout_69 from './pages/SharedLayout_69';
import AboutPage_69 from './pages/AboutPage_69';
import ProductsPage_69 from './pages/ProductsPage_69';
import ErrorPage_69 from './pages/ErrorPage_69';
import HomePage_69 from './pages/HomePage_69';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_69 />}>
          <Route index element={<HomePage_69 />} />
          <Route path='about' element={<AboutPage_69 />} />
          <Route path='products' element={<ProductsPage_69 />} />
          <Route path='*' element={<ErrorPage_69 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
