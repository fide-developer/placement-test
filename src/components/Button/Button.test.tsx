import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '.';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies default variant and size classes', () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('button', 'primary', 'md');
  });

  it.each(['primary', 'secondary', 'outline', 'ghost'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Button variant={variant}>Btn</Button>);
      expect(screen.getByRole('button')).toHaveClass(variant);
    },
  );

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Button size={size}>Btn</Button>);
    expect(screen.getByRole('button')).toHaveClass(size);
  });

  it('applies fullWidth class when true', () => {
    render(<Button fullWidth>Wide</Button>);
    expect(screen.getByRole('button')).toHaveClass('fullWidth');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('disables button and shows spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveClass('loading');
    expect(btn.querySelector('.spinner')).toBeInTheDocument();
  });

  it('does not fire click when loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button loading onClick={onClick}>Loading</Button>);
    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('merges custom className', () => {
    render(<Button className="custom">Btn</Button>);
    expect(screen.getByRole('button')).toHaveClass('button', 'custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });
});
