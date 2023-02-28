import styles from './input.module.scss';
import classNames from 'classnames';
import { InputHTMLAttributes, useState } from 'react';
import { IconEyeOpen } from '../../components/Icon/IconEyeOpen';
import { IconEyeClose } from '../../components/Icon/IconEyeClose';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
}

export const Input = ({ id, error, ...attr }: IProps) => {
  const [type, setType] = useState(attr.type);
  const toggleType = () => setType((prev) => (prev === 'password' ? 'text' : 'password'));

  return (
    <div>
      <div className={styles.container}>
        <input
          id={id}
          className={classNames(styles.input, {
            [styles.inputError]: !!error,
            [styles.inputPassword]: attr.type === 'password',
          })}
          {...attr}
          type={type}
        />
        <label
          htmlFor={id}
          className={classNames(styles.label, {
            [styles.labelTop]: attr.value,
            [styles.labelTopError]: !!error,
          })}
        >
          {attr.placeholder}
        </label>
        {attr.type === 'password' ? (
          <div className={styles.eye} onClick={toggleType}>
            {type === 'password' ? <IconEyeOpen /> : <IconEyeClose />}
          </div>
        ) : null}
      </div>
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};
