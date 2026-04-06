import { Skeleton } from '@/components/Skeleton';
import styles from './style.module.scss';

export function QuestionLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Skeleton width={80} height={16} />
        <Skeleton width={140} height={28} />
        <Skeleton width="90%" height={16} />
      </div>

      <Skeleton width="100%" height={20} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} width="100%" height={40} />
        ))}
      </div>

      <Skeleton width={100} height={40} />
    </div>
  );
}
