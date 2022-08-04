import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductAction, getSingleProducts, resetProduct } from 'features/SingleProduct/store';
import { Container } from 'components/Container';
import { Loader } from 'components/Loader';
import { Counter } from 'features/Сounter';
import { normalizeCategory } from 'utils/common';
import styles from './SingleProduct.module.scss';

export const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getSingleProducts);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductAction(id));
    }
    return () => {
      dispatch(resetProduct());
    };
  }, [dispatch, id]);

  const goBack = () => {
    const backUrl = product ? `/${normalizeCategory(product.category, true)}` : '';
    navigate(backUrl, { replace: true });
  };

  return (
    <Container>
      <button className={styles.back} onClick={goBack}>
        🠔 Back
      </button>
      {product ? (
        <div className={styles.SingleProduct}>
          <div className={styles.SingleProductImg}>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.SingleProductDesc}>
            <div className={styles.SingleProductTitle}>{product.title}</div>
            <div className={styles.SingleProductCategory}>
              <b>Category:</b> {product.category}
            </div>
            <div className={styles.SingleProductDescription}>{product.description}</div>
            <div className={styles.SingleProductPrice}>{product.price}$</div>
            <Counter product={product} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};
