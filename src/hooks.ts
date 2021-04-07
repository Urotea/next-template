// Use throughout your app instead of plain `useDispatch` and `useSelector`

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
