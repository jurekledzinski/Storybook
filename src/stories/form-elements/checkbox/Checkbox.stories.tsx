import { Checkbox } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form elements/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'negative'],
    },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'unfilled'],
    },
  },
  decorators: [
    (Story, context) => {
      const [checked, setChecked] = useState(false);

      return (
        <Story
          args={{
            ...context.args,
            checked,
            name: 'sport',
            value: 'soccer',
            children: 'Soccer',
            onChange: (e) => setChecked(e.target.checked),
          }}
        />
      );
    },
  ],
  parameters: {
    controls: {
      include: ['disabled', 'color', 'readOnly', 'size', 'variant'],
    },
  },
};
