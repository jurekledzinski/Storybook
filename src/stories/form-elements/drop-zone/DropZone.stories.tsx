import { action } from 'storybook/actions';
import { DropZone } from './DropZone';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
import { selectFiles } from './story';
import { useState } from 'react';

const meta: Meta<typeof DropZone> = {
  title: 'Components/Form elements/DropZone',
  component: DropZone,
  args: {
    accept: 'image/*',
    children: (
      <h4 style={{ textTransform: 'uppercase' }}>Click or Drag and Drop</h4>
    ),
  },
  parameters: { controls: { disable: true } },
};

export default meta;

type Store = StoryObj<typeof DropZone>;

export const Playground: Store = {
  decorators: [
    (Story, context) => {
      const [files, setFiles] = useState<string[]>([]);

      return (
        <>
          <Story
            args={{
              ...context.args,
              onDrop: (e) => {
                e.preventDefault();
                selectFiles(e.dataTransfer.files, (fileDetails) =>
                  setFiles((prev) => [...prev, fileDetails])
                );
              },
              onSelectFiles: (files) => {
                selectFiles(files, (fileDetails) =>
                  setFiles((prev) => [...prev, fileDetails])
                );
              },
            }}
          />
          {files.length ? <pre>{JSON.stringify(files, null, 2)}</pre> : null}
        </>
      );
    },
  ],
};

export const Default: Store = {
  args: {
    onDrop: fn((e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      const typeFiles = e.dataTransfer.types;
      const amount = files.length;
      action('onDrop')(files);
      action('onDrop')(typeFiles);
      action('onDrop')(amount);
      selectFiles(files, (fileDetails) => action('onDrop')(fileDetails));
    }),
    onSelectFiles: (files) => {
      selectFiles(files, (fileDetails) => action('onClick')(fileDetails));
    },
  },
};
