import { ControlLayout } from './ControlLayout';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ControlLayout> = {
  component: ControlLayout,
  title: 'Components/Display/ControlLayout',
  args: {},
};

export default meta;

type Story = StoryObj<typeof ControlLayout>;

export const Default: Story = {
  parameters: { controls: { disable: true } },
};
