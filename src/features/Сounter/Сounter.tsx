import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getBasket, removeProduct } from 'features/Basket/store';
import { Count } from 'components/Count';
import { Button } from 'components/Button';
import { TProduct } from 'types/types';

type TProps = {
  product: TProduct;
};

export const Counter: React.FC<TProps> = ({ product }: TProps) => {
  const dispatch = useDispatch();
  const basket = useSelector(getBasket);

  const initialCountValue = useMemo(() => {
    return basket.find((p) => {
      return p.product.id === product?.id;
    });
  }, [basket, product]);

  const addToBasket = () => {
    if (product) {
      dispatch(addProduct(product));
    }
  };

  const onAddProduct = useCallback(() => {
    if (product) {
      dispatch(addProduct(product));
    }
  }, [dispatch, product]);

  const onRemoveProduct = useCallback(() => {
    if (product) {
      dispatch(removeProduct(product.id));
    }
  }, [dispatch, product]);

  return (
    <>
      {initialCountValue && initialCountValue?.count > 0 ? (
        <Count
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
          value={initialCountValue ? initialCountValue.count : 0}
        />
      ) : (
        <Button type="button" onClick={addToBasket}>
          Add to cart
        </Button>
      )}
    </>
  );
};
