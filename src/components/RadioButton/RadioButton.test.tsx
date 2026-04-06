import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Radio, RadioGroup, RadioButton } from '.';

describe('RadioGroup', () => {
  it('renders a fieldset', () => {
    render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders legend when label is provided', () => {
    render(
      <RadioGroup name="color" label="Pick a color">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(screen.getByText('Pick a color')).toBeInTheDocument();
  });

  it('does not render legend when label is not provided', () => {
    const { container } = render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(container.querySelector('legend')).not.toBeInTheDocument();
  });

  it('applies direction class', () => {
    render(
      <RadioGroup name="color" direction="horizontal">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(screen.getByRole('group')).toHaveClass('horizontal');
  });

  it('defaults to vertical direction', () => {
    render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(screen.getByRole('group')).toHaveClass('vertical');
  });

  it('disables all radio buttons when disabled', () => {
    render(
      <RadioGroup name="color" disabled>
        <RadioButton label="Red" value="red" />
        <RadioButton label="Blue" value="blue" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => expect(radio).toBeDisabled());
  });
});

describe('RadioButton', () => {
  it('renders a radio input with label', () => {
    render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Red')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" description="A warm color" />
      </RadioGroup>,
    );
    expect(screen.getByText('A warm color')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    const { container } = render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    expect(container.querySelector('.description')).not.toBeInTheDocument();
  });

  it('checks the radio matching group value', () => {
    render(
      <RadioGroup name="color" value="blue">
        <RadioButton label="Red" value="red" />
        <RadioButton label="Blue" value="blue" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: 'Blue' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'Red' })).not.toBeChecked();
  });

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioGroup name="color" onChange={onChange}>
        <RadioButton label="Red" value="red" />
      </RadioGroup>,
    );
    await user.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalledWith('red');
  });

  it('can be disabled individually', () => {
    render(
      <RadioGroup name="color">
        <RadioButton label="Red" value="red" disabled />
        <RadioButton label="Blue" value="blue" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: 'Red' })).toBeDisabled();
    expect(screen.getByRole('radio', { name: 'Blue' })).not.toBeDisabled();
  });
});

describe('Radio compound export', () => {
  it('exposes Group as a sub-component', () => {
    render(
      <Radio.Group name="size">
        <Radio label="Small" value="sm" />
      </Radio.Group>,
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
});
