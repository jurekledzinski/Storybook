import { faCheck, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { fn } from 'storybook/test';
import { IconButton } from './IconButton';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Components/Buttons/IconButton',
  args: {
    contrast: false,
    color: 'primary',
    size: 'size-sm',
    variant: 'contained',
    isLoading: false,
    onClick: fn(),
    disabled: false,
    border: 'border-xs',
    fullWidth: false,
    icon: [faSun],
  },
  argTypes: {
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
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'negative',
        'default',
      ],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'select' },
      options: ['faCheck', 'faXmark', 'faSun'],
      mapping: {
        faCheck: [faCheck],
        faXmark: [faXmark],
        faSun: [faSun],
      },
    },
    radius: {
      control: { type: 'select' },
      options: [
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['size-xxs', 'size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'minimal', 'outlined', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {};

export const Default: Story = {
  args: { icon: [faSun] },
  render: (args) => (
    <Stack spacing="normal" wrap="wrap">
      <IconButton {...args} />
      <IconButton {...args} color="secondary" />
      <IconButton {...args} color="info" />
      <IconButton {...args} color="negative" />
      <IconButton {...args} color="success" />
      <IconButton {...args} color="warning" />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};

export const Link: Story = {
  args: {
    href: 'http://localhost:6006/?path=/story/components-buttons-iconbutton--link',
    icon: [faSun],
  },
  parameters: { controls: { disable: true } },
};
