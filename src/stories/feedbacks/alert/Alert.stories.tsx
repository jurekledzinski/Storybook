import { Alert } from './Alert';
import { AlertButton, AlertIcon, AlertMessage } from './components';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import {
  faCircleCheck,
  faCircleInfo,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Feedbacks/Alert',
  args: {
    color: 'info',
    variant: 'contained',
    fullWidth: false,
  },
  argTypes: {
    className: {
      control: 'select',
      options: ['none', 'r-xs', 'r-sm', 'r-md', 'r-lg', 'r-xl'],
      mapping: {
        none: undefined,
      },
    },
    color: {
      control: 'select',
      options: ['info', 'secondary', 'success', 'negative', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'filled', 'light', 'outlined'],
    },
  },
  parameters: { controls: { exclude: ['orientation'] } },
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
          color={args.variant === 'light' || args.variant === 'outlined' ? args.color : 'white'}
          variant="text"
        />
      </Alert>
    );
  },
};

export const Default: Story = {
  render: (args) => {
    return (
      <Stack orientation="column" spacing="normal">
        <Alert {...args}>
          <AlertIcon icon={faCircleInfo} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="secondary">
          <AlertIcon icon={faCircleInfo} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="negative">
          <AlertIcon icon={faTriangleExclamation} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="success">
          <AlertIcon icon={faCircleCheck} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="warning">
          <AlertIcon icon={faTriangleExclamation} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} variant="filled">
          <AlertIcon icon={faCircleInfo} color="info" />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="secondary" variant="filled">
          <AlertIcon icon={faCircleInfo} color="secondary" />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="negative" variant="filled">
          <AlertIcon icon={faTriangleExclamation} color="negative" />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="success" variant="filled">
          <AlertIcon icon={faCircleCheck} color="success" />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} color="warning" variant="filled">
          <AlertIcon icon={faTriangleExclamation} color="warning" />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="white" variant="text" />
        </Alert>

        <Alert {...args} variant="light">
          <AlertIcon icon={faCircleInfo} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="info" variant="text" />
        </Alert>

        <Alert {...args} color="secondary" variant="light">
          <AlertIcon icon={faCircleInfo} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="secondary" variant="text" />
        </Alert>

        <Alert {...args} color="negative" variant="light">
          <AlertIcon icon={faTriangleExclamation} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="negative" variant="text" />
        </Alert>

        <Alert {...args} color="success" variant="light">
          <AlertIcon icon={faCircleCheck} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="success" variant="text" />
        </Alert>

        <Alert {...args} color="warning" variant="light">
          <AlertIcon icon={faTriangleExclamation} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="warning" variant="text" />
        </Alert>

        <Alert {...args} variant="outlined">
          <AlertIcon icon={faCircleInfo} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="info" variant="text" />
        </Alert>

        <Alert {...args} color="secondary" variant="outlined">
          <AlertIcon icon={faCircleInfo} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="secondary" variant="text" />
        </Alert>

        <Alert {...args} color="negative" variant="outlined">
          <AlertIcon icon={faTriangleExclamation} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="negative" variant="text" />
        </Alert>

        <Alert {...args} color="success" variant="outlined">
          <AlertIcon icon={faCircleCheck} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="success" variant="text" />
        </Alert>

        <Alert {...args} color="warning" variant="outlined">
          <AlertIcon icon={faTriangleExclamation} color={args.color} />
          <AlertMessage message="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertButton color="warning" variant="text" />
        </Alert>
      </Stack>
    );
  },
  parameters: { controls: { disable: true } },
};
