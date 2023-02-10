import { useCallback, useState } from 'react';

interface IProps {
  cb: () => void;
  delay: number;
}

export const useDebounceModal = ({ cb, delay }: IProps) => {
  const [animateClose, setAnimateClose] = useState(false);

  const closeModal = useCallback(() => {
    setAnimateClose(true);
    setTimeout(() => cb(), delay);
  }, []);

  return { animateClose, closeModal };
};
