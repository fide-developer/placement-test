import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

import { Link } from '.';

describe('Link', () => {
  it('renders children', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders as an anchor element', () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
  });

  it('applies default variant class', () => {
    render(<Link href="/">Home</Link>);
    expect(screen.getByRole('link')).toHaveClass('link', 'default');
  });

  it.each(['default', 'muted', 'underline'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Link href="/" variant={variant}>Link</Link>);
      expect(screen.getByRole('link')).toHaveClass(variant);
    },
  );

  it('adds external link attributes when external is true', () => {
    render(<Link href="https://example.com" external>External</Link>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add external attributes by default', () => {
    render(<Link href="/about">Internal</Link>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('merges custom className', () => {
    render(<Link href="/" className="custom">Link</Link>);
    expect(screen.getByRole('link')).toHaveClass('link', 'custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Link href="/" ref={ref}>Link</Link>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
  });
});
