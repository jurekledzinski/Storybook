import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { useEffect } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form elements/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
    variant: 'basic',
    type: 'text',
    // rows: 6,
    // cols: 3,
    as: 'input',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'number', 'password', 'text'],
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
  decorators: [
    (Story) => (
      <form style={{ width: 400 }} noValidate>
        <Story />
      </form>
    ),
  ],
  render: function Render(args) {
    const [{ as }, updateArgs] = useArgs();

    useEffect(() => {
      if (as === 'input') {
        updateArgs({ args: {} });
      }
    }, [as]);

    return <Input {...args} />;
  },
};
