import { useEffect } from 'react';

/**
 * Dispara a função `next` em intervalos de `delay` ms,
 * reiniciando quando `length` mudar ou no cleanup.
 *
 * @param {() => void} next  — função que avança o slide
 * @param {number} length    — total de slides
 * @param {number} [delay=5000] — intervalo em ms
 */
export function useCarouselAutoPlay(next, length, delay = 8000) {
  useEffect(() => {
    const timer = setInterval(next, delay);
    return () => clearInterval(timer);
  }, [next, length, delay]);
}
