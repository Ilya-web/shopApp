import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import { store } from 'store';
import { SingleProduct } from 'features/SingleProduct';
import { Layout } from 'features/Layout';
import { Products } from 'features/Products';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Products />} />
              <Route path="/:category" element={<Products />} />
              <Route path="/:category/:id" element={<SingleProduct />} />
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
};
