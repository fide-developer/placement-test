import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from '.';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders as a div', () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card').tagName).toBe('DIV');
  });

  it('applies default md padding class', () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('card', 'md');
  });

  it.each(['sm', 'md', 'lg'] as const)('applies %s padding class', (padding) => {
    render(<Card padding={padding} data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('card', padding);
  });

  it('merges custom className', () => {
    render(<Card className="custom" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('card', 'custom');
  });

  it('spreads additional HTML attributes', () => {
    render(<Card role="region" aria-label="test">Content</Card>);
    expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'test');
  });
});
