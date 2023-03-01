import styles from './Toast.module.scss';
import { useEffect, useRef } from 'react';

interface IProps {
  timeout: number;
  setClose: () => void;
}

export const ToastProgress = ({ timeout, setClose }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handlerAnimation = () => {
    setClose();
  };

  useEffect(() => {
    ref.current?.addEventListener('animationend', handlerAnimation);
    return () => {
      ref.current?.addEventListener('animationend', handlerAnimation);
    };
  }, []);

  return (
    <div
      style={{
        animationDuration: `${timeout}ms`,
      }}
      ref={ref}
      className={styles.progress}
    />
  );
};
