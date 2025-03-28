import { faCheck, faXmark, faSun } from '@fortawesome/free-solid-svg-icons';
import { fn } from '@storybook/test';
import { IconButton } from './IconButton';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Components/Buttons/IconButton',
  args: {
    contrast: false,
    color: 'primary',
    size: 'size-sm',
    variant: 'contained',
    isLoading: false,
    onClick: fn(),
    disabled: false,
    border: 'border-xs',
    fullWidth: false,
    icon: [faSun],
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
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'negative',
        'default',
      ],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'select' },
      options: ['faCheck', 'faXmark', 'faSun'],
      mapping: {
        faCheck: [faCheck],
        faXmark: [faXmark],
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
      options: ['contained', 'minimal', 'outlined', 'text'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Link: Story = {
  args: {
    href: 'http://localhost:6006/?path=/story/components-buttons-iconbutton--default',
  },
};
