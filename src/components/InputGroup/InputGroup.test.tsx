import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputGroup } from '.';

describe('InputGroup', () => {
  it('renders children', () => {
    render(
      <InputGroup>
        <span>Content</span>
      </InputGroup>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders Label linked to input via htmlFor', () => {
    render(
      <InputGroup>
        <InputGroup.Label>Username</InputGroup.Label>
        <input id="" />
      </InputGroup>,
    );
    const label = screen.getByText('Username');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for');
  });

  it('renders required asterisk in Label', () => {
    render(
      <InputGroup>
        <InputGroup.Label required>Email</InputGroup.Label>
      </InputGroup>,
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('does not render asterisk when not required', () => {
    render(
      <InputGroup>
        <InputGroup.Label>Email</InputGroup.Label>
      </InputGroup>,
    );
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('renders Description with id', () => {
    render(
      <InputGroup>
        <InputGroup.Description>Help text</InputGroup.Description>
      </InputGroup>,
    );
    const desc = screen.getByText('Help text');
    expect(desc.tagName).toBe('P');
    expect(desc).toHaveAttribute('id');
  });

  it('renders ErrorMessage with role="alert"', () => {
    render(
      <InputGroup>
        <InputGroup.ErrorMessage>Something went wrong</InputGroup.ErrorMessage>
      </InputGroup>,
    );
    const error = screen.getByRole('alert');
    expect(error).toHaveTextContent('Something went wrong');
    expect(error).toHaveAttribute('id');
  });

  it('throws when compound components are used outside InputGroup', () => {
    expect(() => render(<InputGroup.Label>Test</InputGroup.Label>)).toThrow(
      'InputGroup compound components must be used within <InputGroup>',
    );
  });

  it('merges custom className on root', () => {
    render(
      <InputGroup className="custom" data-testid="group">
        <span>Content</span>
      </InputGroup>,
    );
    expect(screen.getByTestId('group')).toHaveClass('group', 'custom');
  });
});
