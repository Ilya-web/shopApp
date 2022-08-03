import React, { useEffect } from 'react';

import { ReactComponent as Plus } from 'assets/icons/plus.svg';

import styles from './Modal.module.scss';

type TProps = {
  children: React.ReactNode;
  isVisible: boolean;
  onCloseModal: () => void;
};

export const Modal: React.FC<TProps> = ({ children, isVisible, onCloseModal }: TProps) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div className={styles.modalWrapper}>
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <button type="button" onClick={onCloseModal} className={styles.modalClose}>
                <Plus />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
