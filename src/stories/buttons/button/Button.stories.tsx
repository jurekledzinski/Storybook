import { Button } from './Button';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { Smiley, Sun, XSquare } from '@phosphor-icons/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Buttons/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    radius: 'radius-none',
    color: 'primary',
    size: 'medium',
    variant: 'contained',
    iconStart: undefined,
    iconEnd: undefined,
    isLoading: false,
    fullWidth: false,
    onClick: fn(),
    label: 'Click button',
    disabled: false,
  },
  argTypes: {
    border: {
      control: { type: 'select' },
      options: [
        'border-xs',
        'border-sm',
        'border-md',
        'border-lg',
        'border-xl',
      ],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'negative'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    iconStart: {
      control: { type: 'select' },
      options: ['none', 'xsquare', 'smiley', 'sun'],
      mapping: {
        none: undefined,
        xsquare: XSquare,
        smiley: Smiley,
        sun: Sun,
      },
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['none', 'xsquare', 'smiley', 'sun'],
      mapping: {
        none: undefined,
        xsquare: XSquare,
        smiley: Smiley,
        sun: Sun,
      },
    },
    radius: {
      control: { type: 'select' },
      options: [
        'radius-none',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
        'radius-x2',
        'radius-x3',
        'radius-full',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
};
