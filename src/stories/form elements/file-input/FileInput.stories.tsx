import { FileInput } from './FileInput';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
  faFile,
  faFileAudio,
  faFileArchive,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof FileInput> = {
  title: 'Components/Form elements/FileInput',
  component: FileInput,
  args: {
    label: 'Upload file',
    variant: 'contained',
    color: 'primary',
    size: 'size-sm',
    iconStart: undefined,
    iconEnd: undefined,
    isLoading: false,
    fullWidth: false,
    disabled: false,
    multiple: false,
    onChange: fn((e) => {
      const files = [...e.target.files];
      action('onChange')(files);
    }),
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
      options: ['primary', 'secondary', 'success', 'warning', 'negative'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    iconStart: {
      control: { type: 'select' },
      options: ['none', 'faFile', 'faFileAudio', 'faFileArchive'],
      mapping: {
        none: undefined,
        faFile: [faFile],
        faFileAudio: [faFileAudio],
        faFileArchive: [faFileArchive],
      },
    },
    iconEnd: {
      control: { type: 'select' },
      options: ['none', 'faFile', 'faFileAudio', 'faFileArchive'],
      mapping: {
        none: undefined,
        faFile: [faFile],
        faFileAudio: [faFileAudio],
        faFileArchive: [faFileArchive],
      },
    },
    radius: {
      control: { type: 'select' },
      options: [
        'radius-none',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'flex' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {};
