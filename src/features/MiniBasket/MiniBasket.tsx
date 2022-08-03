import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBasket } from 'features/Basket/store';
import { Modal } from 'components/Modal';
import { Basket } from 'features/Basket';

import styles from './MiniBasket.module.scss';

export const MiniBasket = () => {
  const [countProduct, setCountProduct] = useState<number>(0);
  const [totalPrise, setTotalPrise] = useState<string>();
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const busket = useSelector(getBasket);

  useEffect(() => {
    const { productsCount, totalPrice } = busket.reduce(
      (total, product) => ({
        productsCount: total.productsCount + product.count,
        totalPrice: total.totalPrice + product.product.price * product.count,
      }),
      { productsCount: 0, totalPrice: 0 },
    );
    setCountProduct(productsCount);
    setTotalPrise(totalPrice.toFixed(2));
  }, [busket]);

  const openBasket = () => {
    setIsVisibleModal(true);
  };

  const onCloseModal = useCallback(() => {
    setIsVisibleModal(false);
  }, []);

  return (
    <>
      <button type="button" className={styles.miniBasket} onClick={openBasket}>
        <span className={styles.miniBasketCount}>
          <svg width="36" height="30" viewBox="0 0 36 30" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M7 7h22v18a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V7z"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M13 10V6c0-2.993 2.009-5 5-5s5 2.026 5 5v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <circle className="cart-not-empty" cx="18" cy="18" r="4" fill="#fff"></circle>
              <text
                x="50%"
                y="50%"
                className="count-basket_mobileCount ms2_total_count"
                textAnchor="middle"
                stroke="#6E5C1A"
                strokeWidth="1px"
                dy="8px"
                fontSize="13px"
              >
                {countProduct}
              </text>
            </g>
          </svg>
        </span>
        <span>{totalPrise}$</span>
      </button>
      <Modal isVisible={isVisibleModal} onCloseModal={onCloseModal}>
        <Basket total={totalPrise} />
      </Modal>
    </>
  );
};
