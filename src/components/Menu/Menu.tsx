import React from 'react';
import { NavLink } from 'react-router-dom';

import { normalizeCategory } from 'utils/common';
import styles from './Menu.module.scss';

interface ICategory {
  category: string[] | undefined;
}

export const Menu: React.FC<ICategory> = ({ category }: ICategory) => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to="/">All</NavLink>
      </li>
      {category?.map((item) => {
        return (
          <li key={item}>
            <NavLink to={`/${normalizeCategory(item, true)}`}>{item}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
