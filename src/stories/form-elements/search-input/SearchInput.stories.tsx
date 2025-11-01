import { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from './SearchInput';
import { Stack } from '@src/app-ui';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/Form elements/SearchInput',
  component: SearchInput,
  args: {
    disabled: false,
    readOnly: false,
    isError: undefined,
    isPending: false,
    label: 'Search',
    size: 'size-md',
    variant: 'basic',
  },
  argTypes: {
    isError: {
      control: 'select',
      options: ['none', 'true', 'false'],
      mapping: {
        none: undefined,
        true: true,
        false: false,
      },
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Playground: Story = {
  parameters: {
    controls: {
      exclude: ['as', 'endIcon', 'startIcon', 'type'],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Stack
      orientation="column"
      spacing="extra-loose"
      style={{ minWidth: '400px' }}
    >
      <SearchInput {...args} variant="basic" />
      <SearchInput {...args} variant="outlined" />
      <SearchInput {...args} variant="contained" />
      <SearchInput {...args} variant="underline" />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};
