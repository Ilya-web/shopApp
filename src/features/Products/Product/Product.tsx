import React from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from 'types/types';
import { normalizeCategory } from 'utils/common';
import { Counter } from 'features/Counter';

import styles from './Product.module.scss';

interface IProduct {
  product: TProduct;
}

export const Product: React.FC<IProduct> = ({ product }: IProduct) => {
  const { image, title, price, id, category } = product;

  return (
    <div className={styles.product}>
      <Link to={`/${normalizeCategory(category, true)}/${id}`}>
        <div className={styles.productImg}>
          <img src={image} loading="lazy" alt={title} />
        </div>
      </Link>

      <div className={styles.productDesc}>
        <Link to={`/${normalizeCategory(category, true)}/${id}`}>
          <div className={styles.productTitle}>{title}</div>
        </Link>
        <div className={styles.productFooter}>
          <div className={styles.productPrice}>{price}$</div>
          <Counter product={product} />
        </div>
      </div>
    </div>
  );
};
