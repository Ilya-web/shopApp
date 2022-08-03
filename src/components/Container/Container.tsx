import React from 'react';

import styles from './Container.module.scss';

type TProps = {
  children: React.ReactNode;
  id?: string;
  containerFluid?: boolean;
};

export const Container: React.FC<TProps> = ({ children, id, containerFluid }: TProps) => {
  return (
    <div className={containerFluid ? styles.containerFluid : styles.container} id={id}>
      {children}
    </div>
  );
};
