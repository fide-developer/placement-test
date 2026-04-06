import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string;
  helperText?: string;
  error?: string;
  inputSize?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, inputSize = 'md', prefix, suffix, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const wrapperClasses = cx(
      styles.inputWrapper,
      styles[inputSize],
      error && styles.hasError,
      props.disabled && styles.disabled,
    );

    return (
      <div className={cx(styles.field, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={wrapperClasses}>
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <input ref={ref} id={inputId} className={styles.input} {...props} />
          {suffix && <span className={styles.suffix}>{suffix}</span>}
        </div>
        {(error || helperText) && (
          <span className={error ? styles.error : styles.helperText}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
