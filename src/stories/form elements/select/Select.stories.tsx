import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { SelectDisplay } from './components/select-display/SelectDisplay';
import { SelectOption } from './components/select-option/SelectOption';
import { SelectPanel } from './components/select-panel/SelectPanel';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Form elements/Select',
  component: Select,
  args: {
    variant: 'outlined',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SelectDisplay endIcon={faChevronDown} />
        <SelectPanel>
          <SelectOption id="red">Red</SelectOption>
          <SelectOption id="green">Green</SelectOption>
          <SelectOption id="orange">Orange</SelectOption>
        </SelectPanel>
      </>
    ),
    label: 'Colors *',
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState('');

      return (
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <Story
            args={{
              ...context.args,
              value,
              onChange: (value) => setValue(value),
            }}
          />
        </form>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const FunctionWay: Story = {
  args: {
    children: (
      <>
        <SelectDisplay endIcon={faChevronDown} />
        <SelectPanel>
          {(item) => {
            return (
              <SelectOption id={item.key} key={item.key}>
                {item.value}
              </SelectOption>
            );
          }}
        </SelectPanel>
      </>
    ),
    items: [
      { key: 'red', value: 'Red' },
      { key: 'green', value: 'Green' },
      { key: 'orange', value: 'Orange' },
    ],
    label: 'Colors *',
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState('');

      return (
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <Story
            args={{
              ...context.args,
              value,
              onChange: (value) => setValue(value),
            }}
          />
        </form>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};
