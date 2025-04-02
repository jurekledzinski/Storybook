import { Button } from './Button';
import { faCheck, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Buttons/Button',
  args: {
    color: 'primary',
    size: 'size-md',
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
      options: ['none', 'faXmark', 'faCheck', 'faSun'],
      mapping: {
        none: undefined,
        faXmark: [faXmark],
        faCheck: [faCheck],
        faSun: [faSun],
      },
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['none', 'faXmark', 'faCheck', 'faSun'],
      mapping: {
        none: undefined,
        faXmark: [faXmark],
        faCheck: [faCheck],
        faSun: [faSun],
      },
    },
    radius: {
      control: { type: 'select' },
      options: [
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
      options: ['contained', 'outlined', 'text'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Link: Story = {
  args: {
    href: 'http://localhost:6006/?path=/story/components-buttons-button--link',
  },
};
