import { useContext } from 'react';
import { ToastContext } from '../ToastProvider';

export function useToastShelf() {
  const {
    toastList,
  } = useContext(ToastContext);

  return {
    toastList,
  }
}