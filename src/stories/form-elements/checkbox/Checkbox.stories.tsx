import { Checkbox } from './Checkbox';
import { CheckboxGroup } from '../checkbox-group';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form elements/Checkbox',
  component: Checkbox,
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
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
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

export const Default: Story = {
  render: () => (
    <CheckboxGroup fullWidth spacing="normal">
      <Checkbox color="primary" defaultChecked>
        Apple
      </Checkbox>
      <Checkbox color="secondary" defaultChecked>
        Banana
      </Checkbox>
      <Checkbox color="negative" defaultChecked>
        Carrot
      </Checkbox>
      <Checkbox color="success" defaultChecked>
        Orange
      </Checkbox>
      <Checkbox color="warning" defaultChecked>
        Mango
      </Checkbox>
      <Checkbox color="info" defaultChecked>
        Pineapple
      </Checkbox>

      <Checkbox color="primary" variant="unfilled" defaultChecked>
        Strawberry
      </Checkbox>
      <Checkbox color="secondary" variant="unfilled" defaultChecked>
        Watermelon
      </Checkbox>
      <Checkbox color="negative" variant="unfilled" defaultChecked>
        Papaya
      </Checkbox>
      <Checkbox color="success" variant="unfilled" defaultChecked>
        Kiwi
      </Checkbox>
      <Checkbox color="warning" variant="unfilled" defaultChecked>
        Lemon
      </Checkbox>
      <Checkbox color="info" variant="unfilled" defaultChecked>
        Avocado
      </Checkbox>
    </CheckboxGroup>
  ),
  parameters: { controls: { disable: true } },
};
