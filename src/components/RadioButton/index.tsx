import { InputHTMLAttributes, forwardRef, createContext, useContext, ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

/* ─── RadioGroup (compound parent) ─── */

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  direction?: 'vertical' | 'horizontal';
  children: ReactNode;
  className?: string;
}

function RadioGroup({
  name,
  value,
  onChange,
  disabled,
  error,
  label,
  direction = 'vertical',
  children,
  className,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled, error }}>
      <fieldset
        className={cx(styles.group, styles[direction], className)}
        disabled={disabled}
      >
        {label && <legend className={styles.legend}>{label}</legend>}
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
}

/* ─── RadioButton ─── */

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label: string;
  value: string;
  description?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, value, description, className, disabled: itemDisabled, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    const isChecked = group ? group.value === value : props.checked;
    const isDisabled = itemDisabled || group?.disabled;
    const hasError = group?.error;

    const handleChange = () => {
      group?.onChange?.(value);
    };

    return (
      <label
        className={cx(
          styles.radioButton,
          isChecked && styles.checked,
          isDisabled && styles.disabled,
          hasError && styles.error,
          className,
        )}
      >
        <input
          ref={ref}
          type="radio"
          name={group?.name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className={styles.input}
          {...props}
        />
        <span className={styles.indicator} />
        <span className={styles.content}>
          <span className={styles.label}>{label}</span>
          {description && <span className={styles.description}>{description}</span>}
        </span>
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';

/* ─── ErrorMessage ─── */

interface RadioErrorMessageProps {
  children?: ReactNode;
  className?: string;
}

function RadioErrorMessage({ children, className }: RadioErrorMessageProps) {
  if (!children) return null;

  return (
    <p className={cx(styles.errorMessage, className)} role="alert">
      {children}
    </p>
  );
}

/* ─── Compound export ─── */

const Radio = Object.assign(RadioButton, {
  Group: RadioGroup,
  ErrorMessage: RadioErrorMessage,
});

export { Radio, RadioGroup, RadioButton, RadioErrorMessage };
export type { RadioButtonProps, RadioGroupProps, RadioErrorMessageProps };
