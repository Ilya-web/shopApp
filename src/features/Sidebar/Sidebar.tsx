import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Menu } from 'components/Menu';
import { Loader } from 'components/Loader';
import {
  getProductsCategory,
  getProductsCategoryIsLoading,
  productsActions,
} from 'features/Products/store';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const category = useSelector(getProductsCategory);
  const isLoading = useSelector(getProductsCategoryIsLoading);

  useEffect(() => {
    dispatch(productsActions.fetchProductsCategoryAction());
  }, [dispatch]);

  return (
    <div className={styles.sidebar}>{isLoading ? <Loader /> : <Menu category={category} />}</div>
  );
};
