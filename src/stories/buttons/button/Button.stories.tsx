import { Button } from './Button';
import { faCheck, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';

type ButtonProps = React.ComponentProps<typeof Button> & { href?: string };

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'Components/Buttons/Button',
  args: {
    color: 'primary',
    size: 'size-md',
    variant: 'contained',
    iconStart: undefined,
    iconEnd: undefined,
    isLoading: false,
    fullWidth: false,
    onClick: fn(),
    label: 'Click button',
    disabled: false,
  },
  argTypes: {
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
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'negative'],
    },
    disabled: {
      control: 'boolean',
    },
    iconStart: {
      control: 'select',
      options: ['none', 'faXmark', 'faCheck', 'faSun'],
      mapping: {
        none: undefined,
        faXmark: [faXmark],
        faCheck: [faCheck],
        faSun: [faSun],
      },
    },
    iconEnd: {
      control: 'select',
      options: ['none', 'faXmark', 'faCheck', 'faSun'],
      mapping: {
        none: undefined,
        faXmark: [faXmark],
        faCheck: [faCheck],
        faSun: [faSun],
      },
    },
    radius: {
      control: 'select',
      options: [
        'default',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: { label: 'Button' },
  render: (args) => (
    <Stack spacing="normal" wrap="wrap">
      <Button {...args} />
      <Button {...args} color="secondary" />
      <Button {...args} color="info" />
      <Button {...args} color="negative" />
      <Button {...args} color="success" />
      <Button {...args} color="warning" />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};

export const Link: Story = {
  args: {
    href: 'http://localhost:6006/?path=/story/components-buttons-button--link',
    label: 'Link Button',
  },
  parameters: { controls: { disable: true } },
};
