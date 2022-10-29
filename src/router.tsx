import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AvisoPrevioPlanoDeSaude from './views/AvisoPrevioPlanoDeSaude';

const RouterOutlet = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<AvisoPrevioPlanoDeSaude />}
          path='/aviso-previo-saude'
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterOutlet;
