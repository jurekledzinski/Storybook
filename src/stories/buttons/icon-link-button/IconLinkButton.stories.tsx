import { AppleLogo, Balloon, Sun } from '@phosphor-icons/react';
import { fn } from '@storybook/test';
import { IconLinkButton } from './IconLinkButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconLinkButton> = {
  component: IconLinkButton,
  title: 'Components/Buttons/IconLinkButton',
};
export default meta;

type Story = StoryObj<typeof IconLinkButton>;

export const Default: Story = {
  args: {
    radius: 'radius-xs',
    color: 'success',
    size: 'medium',
    variant: 'contained',
    isLoading: false,
    onClick: fn(),
    disabled: false,
    border: 'border-xs',
    fullWidth: false,
    icon: Sun,
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
    icon: {
      control: { type: 'select' },
      options: ['apple', 'balloon', 'sun'],
      mapping: {
        apple: AppleLogo,
        balloon: Balloon,
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
