import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Form elements/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
    variant: 'basic',
    type: 'text',
    as: 'input',
    disabled: false,
    readOnly: false,
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
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
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
        <form
          style={{ minWidth: '400px' }}
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <Story />
        </form>
      );
    },
  ],
  parameters: {
    controls: {
      include: [
        'as',
        'cols',
        'disabled',
        'isError',
        'readOnly',
        'rows',
        'size',
        'type',
        'variant',
      ],
    },
  },
};
