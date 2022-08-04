import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions, getProducts, getIsLoading } from 'features/Products/store';
import { Product } from 'features/Products/Product';
import { Loader } from 'components/Loader';
import { normalizeCategory } from 'utils/common';
import styles from './Products.module.scss';

export const Products = () => {
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(productsActions.fetchProductsAction(normalizeCategory(category)));
  }, [category, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapProduct}>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};
