import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout_69 from './pages/SharedLayout_69';
import AboutPage_69 from './pages/AboutPage_69';
import ProductsPage_69 from './pages/ProductsPage_69';
import ErrorPage_69 from './pages/ErrorPage_69';
import HomePage_69 from './pages/HomePage_69';
import SingleProductPage_69 from './pages/SingleProductPage_69';
import ShareProducrLayout_69 from './pages/ShareProducrLayout_69';
import BooklistPage_69 from './pages/BooklistPage_69';
import { booklist_data } from './booklist_data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_69 />}>
          <Route index element={<HomePage_69 />} />
          <Route path='about' element={<AboutPage_69 />} />
          <Route path='products' element={<ShareProducrLayout_69 />}>
            <Route index element={<ProductsPage_69 />} />
            <Route path=':productId' element={<SingleProductPage_69 />} />
          </Route>
          <Route path='booklist' element={<BooklistPage_69 />} />
          <Route path='*' element={<ErrorPage_69 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
