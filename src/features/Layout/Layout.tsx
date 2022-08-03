import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Sidebar } from 'features/Sidebar';
import { MiniBasket } from 'features/MiniBasket';
import styles from './Layout.module.scss';

export const Layout = () => {
  const { id } = useParams();
  return (
    <div className={styles.content}>
      {!id && <Sidebar />}
      <Outlet />
      <MiniBasket />
    </div>
  );
};
