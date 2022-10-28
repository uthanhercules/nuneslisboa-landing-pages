import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Leilao from './views/leilao';
import Saude from './views/saude';

const RouterOutlet = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Leilao />} path='/leilao' />
        <Route element={<Saude />} path='/saude' />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterOutlet;
