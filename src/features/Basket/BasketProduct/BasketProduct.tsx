import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetAllProduct, TState } from 'features/Basket/store';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';

import styles from './BasketProduct.module.scss';
import { Counter } from 'features/Counter';

type TProps = {
  product: TState;
};

export const BasketProduct = ({ product }: TProps) => {
  const dispatch = useDispatch();

  const onDeleteProduct = useCallback(() => {
    dispatch(resetAllProduct(product.product.id));
  }, [dispatch, product]);

  return (
    <div className={styles.basketProduct} key={product.product.id}>
      <div className={styles.basketImg}>
        <img src={product.product.image} alt={product.product.title} />
      </div>
      <div className={styles.basketTitle}>{product.product.title}</div>
      <Counter product={product.product} />
      <div className={styles.basketPrise}>{product.product.price}$</div>
      <button type="button" className={styles.basketDelete} onClick={onDeleteProduct}>
        <Plus />
      </button>
    </div>
  );
};
