import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from '.';

describe('Logo', () => {
  it('renders "Placement Test" text', () => {
    render(<Logo />);
    expect(screen.getByText('Placement Test')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Logo />);
    expect(screen.getByText('Placement Test').tagName).toBe('SPAN');
  });

  it('applies logo class', () => {
    render(<Logo />);
    expect(screen.getByText('Placement Test')).toHaveClass('logo');
  });

  it('merges custom className', () => {
    render(<Logo className="custom" />);
    expect(screen.getByText('Placement Test')).toHaveClass('logo', 'custom');
  });

  it('does not add extra class when className is undefined', () => {
    render(<Logo />);
    const el = screen.getByText('Placement Test');
    expect(el.className).toBe('logo');
  });
});
