import { HTMLAttributes } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ padding = 'md', className, children, ...props }: CardProps) {
  return (
    <div className={cx(styles.card, styles[padding], className)} {...props}>
      {children}
    </div>
  );
}

export type { CardProps };
