import { useCallback, useState } from 'react';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export function useToastPlayGround() {
  const [message, setMessage] = useState('');
  const handleChangeMessage = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const [variant, setVariant] = useState(VARIANT_OPTIONS[0])
  const handleChangeVariant = useCallback((event) => {
    setVariant(event.target.value);
  }, []);

  return {
    message,
    variant,
    handleChangeMessage,
    handleChangeVariant,
  }
}