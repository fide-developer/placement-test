import { HTMLAttributes } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span className={cx(styles.badge, styles[variant], className)} {...props}>
      {children}
    </span>
  );
}

export type { BadgeProps, BadgeVariant };
