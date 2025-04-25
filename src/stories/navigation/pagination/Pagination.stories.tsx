import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  args: {
    totalPages: 1000,
    onChangePage: fn((page, pageSize) => {
      action('onChangePage')({ page, pageSize });
    }),
  },
  argTypes: {
    spacing: {
      control: 'select',
      options: ['none', 'tight', 'normal', 'loose', 'extra-loose'],
    },
    border: {
      control: { type: 'select' },
      options: [
        'undefined',
        'border-xs',
        'border-sm',
        'border-md',
        'border-lg',
        'border-xl',
      ],
    },
    color: {
      control: { type: 'select' },
      options: ['undefined', 'primary', 'secondary'],
    },
    radius: {
      control: { type: 'select' },
      options: [
        'undefined',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    size: {
      control: 'select',
      options: [
        'undefined',
        'size-xxs',
        'size-xs',
        'size-sm',
        'size-md',
        'size-lg',
      ],
    },
    variant: {
      control: 'select',
      options: ['undefined', 'contained', 'outlined', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  parameters: {
    controls: {
      include: ['border', 'color', 'radius', 'spacing', 'size', 'variant'],
    },
  },
};
