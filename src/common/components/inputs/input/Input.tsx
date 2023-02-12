import styles from './input.module.scss';
import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
}

export const Input = ({ id, error, ...attr }: IProps) => {
  return (
    <div>
      <div className={styles.container}>
        <input
          id={id}
          className={classNames(styles.input, { [styles.inputError]: !!error })}
          {...attr}
        />
        <label htmlFor={id} className={classNames(styles.label, { [styles.labelTop]: attr.value })}>
          {attr.placeholder}
        </label>
      </div>
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};
