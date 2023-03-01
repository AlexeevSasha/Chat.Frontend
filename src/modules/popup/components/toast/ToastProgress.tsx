import styles from './Toast.module.scss';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';

interface IProps {
  timeout: number;
  setClose: () => void;
  isType?: boolean;
}

export const ToastProgress = ({ timeout, setClose, isType }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('animationend', setClose);
    return () => {
      ref.current?.addEventListener('animationend', setClose);
    };
  }, []);

  return (
    <div
      style={{
        animationDuration: `${timeout}ms`,
      }}
      ref={ref}
      className={classNames(styles.progress, {
        [styles.progressType]: isType,
      })}
    />
  );
};
