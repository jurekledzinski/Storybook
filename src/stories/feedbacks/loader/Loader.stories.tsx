import { Loader } from './Loader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Feedbacks/Loader',
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    position: 'center',
    border: 'border-xs',
    sizeSchema: 'small',
  },
  argTypes: {
    sizeSchema: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
    position: {
      control: { type: 'select' },
      options: ['center'],
    },
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
  },
};
