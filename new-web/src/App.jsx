import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // ✅ You forgot this
import { useState } from 'react';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import Navbar from './component/Navbar';
import { store } from './App/Store'; // ✅ Corrected the import path

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
