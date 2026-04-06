import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '.';

describe('Navbar', () => {
  it('renders a nav element', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the Logo component', () => {
    render(<Navbar />);
    expect(screen.getByText('Placement Test')).toBeInTheDocument();
  });

  it('applies navbar class', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toHaveClass('navbar');
  });
});
