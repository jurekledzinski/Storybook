import { getCssVariable } from '../../helpers/cssVariables';
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
    border: 'border-xs',
    colorSpin: getCssVariable('--color-primary-700'),
    colorTrack: getCssVariable('--color-track'),
    position: 'center',
    sizeSchema: 'small',
  },
  argTypes: {
    colorSpin: { control: { type: 'color' } },
    colorTrack: { control: { type: 'color' } },
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
