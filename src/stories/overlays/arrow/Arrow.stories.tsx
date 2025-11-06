import styles from './story/ArrowStory.module.css';
import { Arrow } from './Arrow';
import { Box } from '@src/stories/layout';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Arrow> = {
  component: Arrow,
  title: 'Components/Overlays/Arrow',
  args: {
    gap: 1,
    placement: 'top',
    size: 'size-lg',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'negative', 'warning'],
    },
    gap: { control: 'select', options: [1, 1.1, 1.2, 1.3] },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'left start',
        'left end',
        'right start',
        'right end',
        'top start',
        'top end',
        'bottom start',
        'bottom end',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Arrow>;

export const Playground: Story = {
  render: (args) => (
    <Box className={styles.box}>
      <Arrow {...args} />
    </Box>
  ),
};

export const Default: Story = {
  render: (args) => (
    <Box className={styles.box}>
      <Arrow {...args} />
    </Box>
  ),
  parameters: { controls: { disable: true } },
};
