import { Alert } from './Alert';
import { AlertButton, AlertIcon, AlertMessage } from './components';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Feedbacks/Alert',
  args: {
    color: 'info',
    variant: 'contained',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'secondary', 'success', 'negative', 'warning'],
    },
    radius: {
      control: 'select',
      options: [
        'default',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    variant: {
      control: 'select',
      options: ['contained', 'filled', 'light', 'outlined'],
    },
  },
  parameters: {
    controls: {
      exclude: ['className'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        <AlertIcon icon={faCircleInfo} color={args.color} />
        <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <AlertButton
          color={
            args.variant === 'light' || args.variant === 'outlined'
              ? args.color
              : 'white'
          }
          variant="text"
        />
      </Alert>
    );
  },
};

export const Default: Story = {
  render: (args) => {
    return (
      <Alert {...args}>
        <AlertIcon icon={faCircleInfo} color={args.color} />
        <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <AlertButton
          color={
            args.variant === 'light' || args.variant === 'outlined'
              ? args.color
              : 'white'
          }
          variant="text"
        />
      </Alert>
    );
  },
  parameters: {
    controls: {
      include: [],
    },
  },
};
