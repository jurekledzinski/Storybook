import { getCssVariable } from '@src/stories/helpers';
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
    colorTrack: getCssVariable('--loader-track-color'),
  },
  argTypes: {
    colorSpin: { control: { type: 'color' } },
    colorTrack: { control: { type: 'color' } },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    position: {
      control: { type: 'select' },
      options: ['default', 'center'],
      mapping: {
        default: undefined,
        center: 'center',
      },
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
  parameters: {
    controls: {
      include: ['position', 'size', 'border', 'colorSpin', 'colorTrack'],
    },
  },
};
