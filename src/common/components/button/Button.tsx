import { ButtonHTMLAttributes, useRef } from 'react';
import styles from './button.module.scss';
import useRipple from '../../hooks/useRipple';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...attr }: IProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const ripples = useRipple(ref);

  return (
    <button ref={ref} className={styles.button} {...attr}>
      {children}
      {ripples}
    </button>
  );
};
