import { useEffect, useState, RefObject, CSSProperties, useCallback } from 'react';
import { useDebounce } from './useDebounce';

const useRipple = <T extends HTMLElement>(ref: RefObject<T>, delay = 1000) => {
  const [ripples, setRipples] = useState<CSSProperties[]>([]);

  const debounce = useDebounce<number>(ripples.length, delay);
  useEffect(() => {
    if (debounce) setRipples([]);
  }, [debounce]);

  const clickHandler = useCallback((e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect() as DOMRect;
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
    const height = ref.current?.clientHeight || 0;
    const width = ref.current?.clientWidth || 0;
    const diameter = Math.max(width, height);

    setRipples((prev) => [
      ...prev,
      {
        top: top - diameter / 2,
        left: left - diameter / 2,
        height: diameter,
        width: diameter,
      },
    ]);
  }, []);

  useEffect(() => {
    ref.current?.addEventListener('click', clickHandler);
    return () => {
      ref.current?.removeEventListener('click', clickHandler);
    };
  }, [ref]);

  return ripples.map((style, i) => {
    return (
      <span
        key={i}
        className={'ripple'}
        style={{
          ...style,
          animation: `ripple ${delay}ms linear`,
        }}
      />
    );
  });
};
export default useRipple;
