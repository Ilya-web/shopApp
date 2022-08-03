import React, { useState } from 'react';

import { ReactComponent as Minus } from 'assets/icons/minus.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import styles from './Count.module.scss';

type TProps = {
  value: number;
  onAddProduct: () => void;
  onRemoveProduct: () => void;
};

export const Count: React.FC<TProps> = ({ value, onAddProduct, onRemoveProduct }: TProps) => {
  const [valueInput, setValueInput] = useState(value);

  const inc = () => {
    setValueInput((prev) => prev + 1);
    onAddProduct();
  };

  const dec = () => {
    if (valueInput > 0) {
      setValueInput((prev) => prev - 1);
    }
    onRemoveProduct();
  };

  return (
    <div className={styles.count}>
      <button type="button" className={styles.countBtn} onClick={dec}>
        <Minus />
      </button>
      <input type="text" value={valueInput} readOnly />
      <button type="button" className={styles.countBtn} onClick={inc}>
        <Plus />
      </button>
    </div>
  );
};
