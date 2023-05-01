import { useContext } from 'react';
import { ToastContext } from '../components/ToastProvider';
import { useHandleKeyDown } from './useHandleKeyDown';

export function useEscapeKey() {
  const {
    handleAllCLoseToasts,
  } = useContext(ToastContext);

  function handleKeyDown(event) {
    if (event.keyCode === 27) {
      handleAllCLoseToasts();
    }
  }
  useHandleKeyDown({ handleKeyDown })

}
