import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket, resetAllProduct } from 'features/Basket/store';
import { BasketProduct } from './BasketProduct';

import { Button } from 'components/Button';
import { ReactComponent as SuccessImg } from 'assets/icons/success-image.svg';
import styles from './Basket.module.scss';

type TState = {
  total: string | undefined;
};

export const Basket: React.FC<TState> = ({ total }: TState) => {
  const busket = useSelector(getBasket);
  const dispatch = useDispatch();
  const [sentData, setSentData] = useState(false);

  const onSubmit = () => {
    console.log('Order', busket);
    busket.forEach((p) => {
      return dispatch(resetAllProduct(p.product.id));
    });
    setSentData(true);
  };

  return (
    <div>
      {!sentData ? (
        <div className={styles.basketTitle}>{busket.length > 0 ? 'Basket' : 'Basket is empty'}</div>
      ) : (
        <>
          <div className={styles.basketTitle}>Order sent successfully</div>
          <div className={styles.basketImg}>
            <SuccessImg />
          </div>
        </>
      )}

      {busket.length > 0 && (
        <>
          <div className={styles.basketProducts}>
            {busket.map((product) => {
              return <BasketProduct product={product} key={product.product.id} />;
            })}
          </div>
          {total && total !== '0.00' ? <div className={styles.basketTotal}>{total}$</div> : ''}
          <Button type="button" onClick={onSubmit}>
            Order
          </Button>
        </>
      )}
    </div>
  );
};
