import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './Icon';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Graphics/Icon',
  args: {
    color: 'primary',
    icon: faHome,
    size: '1x',
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'info',
        'primary',
        'secondary',
        'success',
        'warning',
        'negative',
      ],
    },
    size: {
      control: 'select',
      options: [
        '1x',
        '2x',
        '2x1',
        '2xs',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x',
        '10x',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
  parameters: {
    controls: {
      exclude: ['className', 'icon'],
    },
  },
};

export const Default: Story = {
  render: () => {
    return (
      <Stack spacing="normal">
        <Icon icon={faHome} color="primary" />
        <Icon icon={faHome} color="secondary" />
        <Icon icon={faHome} color="negative" />
        <Icon icon={faHome} color="success" />
        <Icon icon={faHome} color="warning" />
        <Icon icon={faHome} color="info" />
      </Stack>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};
