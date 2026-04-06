import { describe, it, expect } from 'vitest';
import { cx } from './index';

describe('cx', () => {
  it('joins multiple class names', () => {
    expect(cx('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values', () => {
    expect(cx('a', false, 'b', null, undefined, '', 'c')).toBe('a b c');
  });

  it('returns empty string when all values are falsy', () => {
    expect(cx(false, null, undefined, '', 0)).toBe('');
  });

  it('returns empty string when called with no arguments', () => {
    expect(cx()).toBe('');
  });

  it('handles a single class name', () => {
    expect(cx('only')).toBe('only');
  });

  it('supports conditional expressions', () => {
    const isActive = true;
    const isDisabled = false;
    expect(cx('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active');
  });

  it('handles numeric values', () => {
    expect(cx('a', 1, 0, 2)).toBe('a 1 2');
  });
});
