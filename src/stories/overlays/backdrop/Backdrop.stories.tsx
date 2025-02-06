import { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  component: Backdrop,
  title: 'Components/Overlays/Backdrop',
};
export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {};
