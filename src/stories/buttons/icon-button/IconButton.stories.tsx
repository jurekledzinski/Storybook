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
    fullWidth: false,
    icon: [faSun],
  },
  argTypes: {
    className: {
      control: 'select',
      options: ['none', 'b-xs', 'b-sm', 'b-md', 'b-lg', 'r-xs', 'r-sm', 'r-md', 'r-lg', 'r-xl'],
      mapping: {
        none: undefined,
      },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'negative', 'default'],
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

export const Playground: Story = {
  parameters: { controls: { exclude: ['href', 'onClick'] } },
};

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
      <IconButton {...args} variant="outlined" />
      <IconButton {...args} color="secondary" variant="outlined" />
      <IconButton {...args} color="info" variant="outlined" />
      <IconButton {...args} color="negative" variant="outlined" />
      <IconButton {...args} color="success" variant="outlined" />
      <IconButton {...args} color="warning" variant="outlined" />
      <IconButton {...args} variant="text" />
      <IconButton {...args} color="secondary" variant="text" />
      <IconButton {...args} color="info" variant="text" />
      <IconButton {...args} color="negative" variant="text" />
      <IconButton {...args} color="success" variant="text" />
      <IconButton {...args} color="warning" variant="text" />
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
