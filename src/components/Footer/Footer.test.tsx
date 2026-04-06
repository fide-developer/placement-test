import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

import { Footer } from '.';

describe('Footer', () => {
  it('renders footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays author text', () => {
    render(<Footer />);
    expect(screen.getByText('Build by Fadjar Firdaus')).toBeInTheDocument();
  });

  it('renders LinkedIn link with correct attributes', () => {
    render(<Footer />);
    const link = screen.getByLabelText('LinkedIn');
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/fadjarfirdaus');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders GitHub link with correct attributes', () => {
    render(<Footer />);
    const link = screen.getByLabelText('GitHub');
    expect(link).toHaveAttribute('href', 'https://www.github.com/fide.developer');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
