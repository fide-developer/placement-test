'use client';

import { createContext, useContext, useId, ReactNode, HTMLAttributes } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

/* ─── Context ─── */

interface InputGroupContextValue {
  inputId: string;
  errorId: string;
  descriptionId: string;
}

const InputGroupContext = createContext<InputGroupContextValue | null>(null);

function useInputGroup() {
  const context = useContext(InputGroupContext);
  if (!context) {
    throw new Error('InputGroup compound components must be used within <InputGroup>');
  }
  return context;
}

/* ─── InputGroup (root) ─── */

interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function InputGroup({ children, className, ...props }: InputGroupProps) {
  const id = useId();
  const inputId = `${id}-input`;
  const errorId = `${id}-error`;
  const descriptionId = `${id}-description`;

  return (
    <InputGroupContext.Provider value={{ inputId, errorId, descriptionId }}>
      <div className={cx(styles.group, className)} {...props}>
        {children}
      </div>
    </InputGroupContext.Provider>
  );
}

/* ─── Label ─── */

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: ReactNode;
}

function Label({ required, children, className, ...props }: LabelProps) {
  const { inputId } = useInputGroup();

  return (
    <label htmlFor={inputId} className={cx(styles.label, className)} {...props}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  );
}

/* ─── Description ─── */

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function Description({ children, className, ...props }: DescriptionProps) {
  const { descriptionId } = useInputGroup();

  return (
    <p id={descriptionId} className={cx(styles.description, className)} {...props}>
      {children}
    </p>
  );
}

/* ─── ErrorMessage ─── */

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function ErrorMessage({ children, className, ...props }: ErrorMessageProps) {
  const { errorId } = useInputGroup();

  return (
    <p id={errorId} role="alert" className={cx(styles.errorMessage, className)} {...props}>
      {children}
    </p>
  );
}

/* ─── Compound export ─── */

InputGroup.Label = Label;
InputGroup.Description = Description;
InputGroup.ErrorMessage = ErrorMessage;
InputGroup.useInputGroup = useInputGroup;

export { InputGroup };
export type { InputGroupProps, LabelProps, DescriptionProps, ErrorMessageProps };
