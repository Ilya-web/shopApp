import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type TProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<TProps> = ({ children, type, className, onClick }: TProps) => {
  return (
    <button type={type} className={classNames(styles.btn, className)} onClick={onClick}>
      {children}
    </button>
  );
};
