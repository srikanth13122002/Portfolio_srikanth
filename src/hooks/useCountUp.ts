import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  start?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  start = false,
}: UseCountUpOptions): string {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return value.toFixed(decimals);
}
