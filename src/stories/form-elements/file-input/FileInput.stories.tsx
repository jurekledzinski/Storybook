import { action } from 'storybook/actions';
import { FileInput } from './FileInput';
import { FileInputContainer, Placement } from './components';
import { FileInputProps } from './types';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import { useState } from 'react';
import {
  faFile,
  faFileAudio,
  faFileArchive,
} from '@fortawesome/free-solid-svg-icons';

type ExtendedFileInputProps = FileInputProps & { placement: Placement };

const meta: Meta<ExtendedFileInputProps> = {
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
    disabled: { control: 'boolean' },
    iconStart: {
      control: 'select',
      options: ['none', 'faFile', 'faFileAudio', 'faFileArchive'],
      mapping: {
        none: undefined,
        faFile: [faFile],
        faFileAudio: [faFileAudio],
        faFileArchive: [faFileArchive],
      },
    },
    iconEnd: {
      control: 'select',
      options: ['none', 'faFile', 'faFileAudio', 'faFileArchive'],
      mapping: {
        none: undefined,
        faFile: [faFile],
        faFileAudio: [faFileAudio],
        faFileArchive: [faFileArchive],
      },
    },
    radius: {
      control: 'select',
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

type Story = StoryObj<ExtendedFileInputProps>;

export const Playground: Story = {};

export const Default: Story = {
  render: () => (
    <Stack spacing="normal" wrap="wrap">
      <FileInput label="Upload file" />
      <FileInput label="Upload file" color="negative" />
      <FileInput label="Upload file" color="secondary" />
      <FileInput label="Upload file" color="success" />
      <FileInput label="Upload file" color="warning" />
      <FileInput label="Upload file" color="info" />

      <FileInput label="Upload file" variant="outlined" />
      <FileInput label="Upload file" color="negative" variant="outlined" />
      <FileInput label="Upload file" color="secondary" variant="outlined" />
      <FileInput label="Upload file" color="success" variant="outlined" />
      <FileInput label="Upload file" color="warning" variant="outlined" />
      <FileInput label="Upload file" color="info" variant="outlined" />

      <FileInput label="Upload file" variant="text" />
      <FileInput label="Upload file" color="negative" variant="text" />
      <FileInput label="Upload file" color="secondary" variant="text" />
      <FileInput label="Upload file" color="success" variant="text" />
      <FileInput label="Upload file" color="warning" variant="text" />
      <FileInput label="Upload file" color="info" variant="text" />
    </Stack>
  ),
  parameters: { controls: { disable: true } },
};

export const withInfo: Story = {
  args: {
    placement: 'bottom',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'left', 'right', 'top'],
    },
  },
  decorators: [
    (Story, context) => {
      const [files, setFiles] = useState<File[]>([]);

      return (
        <FileInputContainer placement={context.args.placement}>
          <Story
            args={{
              ...context.args,
              onChange: (e) => {
                const files = e.target.files;
                if (!files) return;
                const filesArray = [...files];
                setFiles(filesArray);
              },
              multiple: true,
            }}
          />
          <div>
            {files.map((file) => (
              <p key={file.size} style={{ fontSize: 12 }}>
                {file.name}
              </p>
            ))}
          </div>
        </FileInputContainer>
      );
    },
  ],
  parameters: { controls: { include: ['placement'] } },
};
