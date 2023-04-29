import { useCallback, useState } from 'react';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export function useToastPlayGround() {
  const [toastList, setToastList] = useState([]);
  const [message, setMessage] = useState('');
  const handleChangeMessage = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const [variant, setVariant] = useState(VARIANT_OPTIONS[0])
  const handleChangeVariant = useCallback((event) => {
    setVariant(event.target.value);
  }, []);


  const onClickOpenToast = useCallback((event) => {
    event.preventDefault();
    if (!message) return;
    const addToast = { id: crypto.randomUUID(), message, variant }
    toastList.push(addToast)
    setToastList(toastList)
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }, [message, toastList, variant]);

  const onClickCloseToast = useCallback((event, id) => {
    event.preventDefault();
    const renewToastList = toastList.filter((toast) => toast.id !== id)
    setToastList(renewToastList)
  }, [toastList]);

  return {
    message,
    variant,
    toastList,
    handleChangeMessage,
    handleChangeVariant,
    onClickOpenToast,
    onClickCloseToast
  }
}