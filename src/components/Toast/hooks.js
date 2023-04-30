import { useContext, useMemo } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'react-feather';
import { ToastContext } from '../ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

export function useToast({ variant }) {
  const {
    onClickCloseToast
  } = useContext(ToastContext);

  const Icon = useMemo(() => ICONS_BY_VARIANT[variant] || ICONS_BY_VARIANT['notice'], [variant]);
  const iconStyle = useMemo(() => styles[variant] || styles['notice'], [variant]);

  return {
    Icon,
    iconStyle,
    onClickCloseToast
  }
}