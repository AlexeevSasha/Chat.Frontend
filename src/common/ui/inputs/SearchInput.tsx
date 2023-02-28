import classNames from 'classnames';
import styles from './input.module.scss';
import { InputHTMLAttributes } from 'react';
import { IconSearch } from '../../components/Icon/IconSearch';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const SearchInput = ({ id, ...attr }: IProps) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        className={classNames(styles.input, styles.search, {
          [styles.searchFixed]: attr.value,
        })}
        {...attr}
        type={'search'}
      />
      <div className={styles.searchIcon}>
        <IconSearch />
      </div>
    </div>
  );
};
