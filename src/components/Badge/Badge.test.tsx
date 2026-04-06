import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from '.';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Badge>Tag</Badge>);
    expect(screen.getByText('Tag').tagName).toBe('SPAN');
  });

  it('applies default variant class', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('badge', 'default');
  });

  it.each(['primary', 'success', 'warning', 'error', 'info'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Badge variant={variant}>{variant}</Badge>);
      expect(screen.getByText(variant)).toHaveClass('badge', variant);
    },
  );

  it('merges custom className', () => {
    render(<Badge className="custom">Test</Badge>);
    expect(screen.getByText('Test')).toHaveClass('badge', 'custom');
  });

  it('spreads additional HTML attributes', () => {
    render(<Badge data-testid="my-badge" title="info">Test</Badge>);
    expect(screen.getByTestId('my-badge')).toHaveAttribute('title', 'info');
  });
});
