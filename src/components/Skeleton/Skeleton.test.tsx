import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skeleton } from '.';

describe('Skeleton', () => {
  it('renders a span element', () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('applies skeleton class', () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('span')).toHaveClass('skeleton');
  });

  it('applies width style', () => {
    const { container } = render(<Skeleton width={200} />);
    expect(container.querySelector('span')).toHaveStyle({ width: '200px' });
  });

  it('applies height style', () => {
    const { container } = render(<Skeleton height={48} />);
    expect(container.querySelector('span')).toHaveStyle({ height: '48px' });
  });

  it('applies both width and height', () => {
    const { container } = render(<Skeleton width="100%" height={40} />);
    const el = container.querySelector('span')!;
    expect(el).toHaveStyle({ width: '100%', height: '40px' });
  });

  it('merges custom className', () => {
    const { container } = render(<Skeleton className="custom" />);
    expect(container.querySelector('span')).toHaveClass('skeleton', 'custom');
  });

  it('does not set inline styles when width/height not provided', () => {
    const { container } = render(<Skeleton />);
    const el = container.querySelector('span')!;
    expect(el.style.width).toBe('');
    expect(el.style.height).toBe('');
  });
});
