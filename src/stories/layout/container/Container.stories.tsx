import { Container } from './Container';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Components/Layout/Container',
  args: {
    children: 'Container as main tag',
    as: 'main',
    className: 'mw-sm m-center',
  },
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = { parameters: { controls: { disable: true } } };
