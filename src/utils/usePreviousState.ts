import { useEffect, useRef, useState } from 'react';

export function usePreviousState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const [state, setState] = useState<T>(initialValue);
  const prevRef = useRef<T>(initialValue);

  useEffect(() => {
    prevRef.current = state;
  }, [state]);

  const previous = prevRef.current;

  return [state, setState, previous];
}
