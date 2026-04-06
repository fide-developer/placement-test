import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Typography } from '.';

describe('Typography', () => {
  it('renders children', () => {
    render(<Typography>Hello</Typography>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('defaults to body variant rendered as p', () => {
    render(<Typography>Body text</Typography>);
    const el = screen.getByText('Body text');
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('typography', 'body');
  });

  it.each([
    ['h1', 'H1'],
    ['h2', 'H2'],
    ['h3', 'H3'],
    ['h4', 'H4'],
    ['body', 'P'],
    ['bodySmall', 'P'],
    ['caption', 'SPAN'],
    ['overline', 'SPAN'],
  ] as const)('renders %s variant as %s tag', (variant, expectedTag) => {
    render(<Typography variant={variant}>Text</Typography>);
    expect(screen.getByText('Text').tagName).toBe(expectedTag);
  });

  it('overrides default tag with as prop', () => {
    render(<Typography variant="h1" as="div">Heading</Typography>);
    expect(screen.getByText('Heading').tagName).toBe('DIV');
  });

  it.each(['normal', 'medium', 'semibold', 'bold'] as const)(
    'applies weight-%s class',
    (weight) => {
      render(<Typography weight={weight}>Text</Typography>);
      expect(screen.getByText('Text')).toHaveClass(`weight-${weight}`);
    },
  );

  it.each(['left', 'center', 'right'] as const)(
    'applies align-%s class',
    (align) => {
      render(<Typography align={align}>Text</Typography>);
      expect(screen.getByText('Text')).toHaveClass(`align-${align}`);
    },
  );

  it.each(['default', 'muted', 'primary', 'error', 'success'] as const)(
    'applies color-%s class',
    (color) => {
      render(<Typography color={color}>Text</Typography>);
      expect(screen.getByText('Text')).toHaveClass(`color-${color}`);
    },
  );

  it('does not apply weight/align classes when not provided', () => {
    render(<Typography>Text</Typography>);
    const el = screen.getByText('Text');
    expect(el.className).not.toMatch(/weight-/);
    expect(el.className).not.toMatch(/align-/);
  });

  it('merges custom className', () => {
    render(<Typography className="custom">Text</Typography>);
    expect(screen.getByText('Text')).toHaveClass('typography', 'custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Typography ref={ref}>Text</Typography>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLParagraphElement));
  });

  it('spreads additional HTML attributes', () => {
    render(<Typography data-testid="typo" aria-label="test">Text</Typography>);
    expect(screen.getByTestId('typo')).toHaveAttribute('aria-label', 'test');
  });
});
