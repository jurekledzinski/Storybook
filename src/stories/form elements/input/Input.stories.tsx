import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

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
    as: 'input',
  },
  beforeEach: (props) => {
    if (props.args.as === 'textarea' && !props.args.cols && !props.args.rows) {
      props.args.cols = 4;
      props.args.rows = 4;
    }
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
    },
    cols: {
      control: { type: 'select' },
      options: [3, 4],
      table: {
        category: 'Specific',
      },
      if: { arg: 'as', eq: 'textarea' },
    },
    isError: {
      control: 'select',
      options: ['none', 'true', 'false'],
      mapping: {
        none: undefined,
        true: true,
        false: false,
      },
    },
    rows: {
      control: {
        type: 'select',
      },
      options: [1, 4, 8, 12],
      table: {
        category: 'Specific',
      },
      if: { arg: 'as', eq: 'textarea' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'number', 'password', 'text'],
      if: { arg: 'as', eq: 'input' },
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <form style={{ width: 'min(400px,100%)' }} noValidate>
          <Story />
        </form>
      );
    },
  ],
  parameters: {
    controls: {
      include: ['as', 'cols', 'isError', 'rows', 'size', 'type', 'variant'],
    },
  },
};
