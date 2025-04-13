import { Alert } from './Alert';
import { AlertProps } from './types';
import { Meta, StoryObj } from '@storybook/react';
import {
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
  faTriangleExclamation,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons';

const colorToIconMap = {
  info: faCircleInfo,
  warning: faTriangleExclamation,
  success: faCircleCheck,
  secondary: faCircleExclamation,
  negative: faSquareXmark,
};

const meta: Meta<AlertProps> = {
  component: Alert,
  title: 'Components/Feedbacks/Alert',
};
export default meta;

type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    color: 'info',
    fullWidth: false,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    size: 'size-xs',
    variant: 'contained',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['info', 'secondary', 'success', 'warning', 'negative'],
    },
    radius: {
      control: { type: 'select' },
      options: [
        'none',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['none', 'contained', 'outlined'],
    },
  },
  render: (args) => <Alert {...args} icon={colorToIconMap[args.color]} />,
  parameters: {
    controls: {
      include: ['color', 'fullWidth', 'size', 'radius', 'variant'],
    },
  },
};
