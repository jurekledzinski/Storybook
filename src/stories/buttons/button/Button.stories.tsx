import { Button } from './Button';
import { faCheck, faChevronDown, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
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
    className: {
      control: 'select',
      options: ['none', 'b-xs', 'b-sm', 'b-md', 'b-lg', 'r-xs', 'r-sm', 'r-md', 'r-lg', 'r-xl'],
      mapping: {
        none: undefined,
      },
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
      options: ['none', 'faChevronDown', 'faCheck', 'faSun'],
      mapping: {
        none: undefined,
        faChevronDown: [faChevronDown],
        faCheck: [faCheck],
        faSun: [faSun],
      },
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

export const Playground: Story = {
  parameters: { controls: { exclude: ['href', 'onClick'] } },
};

export const Default: Story = {
  args: { label: 'Button example' },
  render: (args) => (
    <Stack spacing="normal" wrap="wrap">
      <Button {...args} />
      <Button {...args} color="secondary" />
      <Button {...args} color="info" />
      <Button {...args} color="negative" />
      <Button {...args} color="success" />
      <Button {...args} color="warning" />
      <Button {...args} variant="outlined" />
      <Button {...args} color="secondary" variant="outlined" />
      <Button {...args} color="info" variant="outlined" />
      <Button {...args} color="negative" variant="outlined" />
      <Button {...args} color="success" variant="outlined" />
      <Button {...args} color="warning" variant="outlined" />
      <Button {...args} variant="text" />
      <Button {...args} color="secondary" variant="text" />
      <Button {...args} color="info" variant="text" />
      <Button {...args} color="negative" variant="text" />
      <Button {...args} color="success" variant="text" />
      <Button {...args} color="warning" variant="text" />
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
