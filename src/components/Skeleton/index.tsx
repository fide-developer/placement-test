import { cx } from '@/utils/cx';
import styles from './style.module.scss';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({ width, height, className }: SkeletonProps) {
  return (
    <span
      className={cx(styles.skeleton, className)}
      style={{ width, height }}
    />
  );
}
