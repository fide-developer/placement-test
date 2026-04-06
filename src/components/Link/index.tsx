import NextLink from 'next/link';
import { AnchorHTMLAttributes, forwardRef, ComponentProps } from 'react';
import { cx } from '@/utils/cx';
import styles from './style.module.scss';

type LinkVariant = 'default' | 'muted' | 'underline';

type LinkProps = ComponentProps<typeof NextLink> & {
  variant?: LinkVariant;
  external?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'default', external = false, className, children, ...props }, ref) => {
    const classes = cx(styles.link, styles[variant], className);

    const externalProps = external
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : {};

    return (
      <NextLink ref={ref} className={classes} {...externalProps} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export { Link };
export type { LinkProps };
