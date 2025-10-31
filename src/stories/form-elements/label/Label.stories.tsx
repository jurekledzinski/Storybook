import { Label } from './Label';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Form elements/Label',
  args: {
    children: 'Label example',
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = { parameters: { controls: { disable: true } } };
