import { AsyncThunk } from '@reduxjs/toolkit';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../store';

export function useThunk(
  thunk: AsyncThunk<any, any, any>
): [(arg?: any) => void, boolean, any] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  const runThunk = useCallback(
    (arg?: any) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
