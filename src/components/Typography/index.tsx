import { HTMLAttributes, forwardRef, ElementType } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'caption' | 'overline';
type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TypographyAlign = 'left' | 'center' | 'right';
type TypographyColor = 'default' | 'muted' | 'primary' | 'error' | 'success';

const defaultTagMap: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
  overline: 'span',
};

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  color?: TypographyColor;
  as?: ElementType;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body', weight, align, color = 'default', as, className, children, ...props }, ref) => {
    const Component = as || defaultTagMap[variant];

    const classes = cx(
      styles.typography,
      styles[variant],
      weight && styles[`weight-${weight}`],
      align && styles[`align-${align}`],
      styles[`color-${color}`],
      className,
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export { Typography };
export type { TypographyProps };
