import { Icon } from './Icon';
import { Meta, StoryObj } from '@storybook/react';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Graphics/Icon',
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    color: 'primary',
    icon: faCheckCircle,
    size: '1x',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'info',
        'primary',
        'secondary',
        'success',
        'warning',
        'negative',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'lg', 'xl'],
    },
    icon: {
      control: { type: 'select' },
      options: ['faCheckCircle', 'faExclamationCircle'],
      mapping: {
        faCheckCircle: faCheckCircle,
        faExclamationCircle: faExclamationCircle,
      },
    },
  },
};
