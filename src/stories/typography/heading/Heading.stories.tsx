import { Heading } from './Heading';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Typography/Heading',
  args: {
    children: 'Label example',
    level: 1,
    fw: 'fw-900',
  },
  argTypes: {
    fw: {
      control: 'select',
      options: [
        'fw-100',
        'fw-200',
        'fw-300',
        'fw-400',
        'fw-500',
        'fw-600',
        'fw-700',
        'fw-800',
        'fw-900',
      ],
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Playground: Story = { parameters: { controls: { include: ['fw', 'level'] } } };

export const Default: Story = {
  render: () => (
    <Stack orientation="column" spacing="normal">
      <Heading level={1}>Heading example</Heading>
      <Heading level={2}>Heading example</Heading>
      <Heading level={3}>Heading example</Heading>
      <Heading level={4}>Heading example</Heading>
      <Heading level={5}>Heading example</Heading>
      <Heading level={6}>Heading example</Heading>
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};
