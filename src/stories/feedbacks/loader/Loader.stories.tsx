import { getCssVariable } from '@src/stories/helpers';
import { Loader } from './Loader';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Feedbacks/Loader',
  args: {
    border: 'border-xs',
    colorSpin: getCssVariable('--color-primary-700'),
    colorTrack: getCssVariable('--loader-track-color'),
    size: 'size-sm',
  },
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Playground: Story = {
  argTypes: {
    colorSpin: { control: 'color' },
    colorTrack: { control: 'color' },
    size: { control: 'number' },
    position: {
      control: { type: 'select' },
      options: ['default', 'element', 'viewport'],
    },
    border: {
      control: 'select',
      options: [
        'border-xs',
        'border-sm',
        'border-md',
        'border-lg',
        'border-xl',
      ],
    },
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Loader {...args} />
    </div>
  ),
};

export const Default: Story = {
  parameters: {
    controls: {
      include: [],
    },
  },
};
