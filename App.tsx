import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Editorial from './pages/Editorial';
import Wholesale from './pages/Wholesale';
import Workshops from './pages/Workshops';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/intervention-jacket" element={<Editorial />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for details page using Shop for now */}
          <Route path="/product/:id" element={<Shop />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
