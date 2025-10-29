import { action } from 'storybook/actions';
import { DropZone } from './DropZone';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof DropZone> = {
  title: 'Components/Form elements/DropZone',
  component: DropZone,
  args: {
    title: 'Drag and drop',
    onDrop: fn((e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      const typeFiles = e.dataTransfer.types;
      const amount = files.length;
      action('onDrop')(files);
      action('onDrop')(typeFiles);
      action('onDrop')(amount);

      [...files].forEach((file, i) => {
        const fileDetails = `file[${i}].name = ${file.name} ${file.type} ${file.size}`;
        action('onDrop')(fileDetails);
      });
    }),
  },
  parameters: {
    controls: {
      include: ['title'],
    },
  },
};

export default meta;

type Store = StoryObj<typeof DropZone>;

export const Default: Store = {};
