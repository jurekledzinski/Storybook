import { getCssVariable } from '../../helpers/cssVariables';
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
    // color: getCssVariable('--color-primary-700'),
    color: 'primary',
    icon: faCheckCircle,
    size: '1x',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'negative'],
      mapping: {
        primary: getCssVariable('--color-primary-700'),
        secondary: getCssVariable('--color-secondary-400'),
        success: getCssVariable('--color-success-400'),
        warning: getCssVariable('--color-warning-900'),
        negative: getCssVariable('--color-negative-500'),
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'very large'],
      mapping: {
        small: 16,
        medium: 20,
        large: 24,
        'very large': 48,
      },
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
