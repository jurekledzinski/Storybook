import { FileInput } from '@src/stories/form-elements/file-input';
import { Meta, StoryObj } from '@storybook/react-vite';
import { PreviewFiles } from './PreviewFiles';
import { useState } from 'react';
import { Form } from '@src/stories/form-elements/form';

const meta: Meta<typeof PreviewFiles> = {
  title: 'Components/Graphics/PreviewFiles',
  component: PreviewFiles,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof PreviewFiles>;

export const Default: Story = {
  args: { gridPlacement: 'grid' },
  argTypes: {
    gridPlacement: {
      control: { type: 'select' },
      options: ['column', 'grid', 'row'],
    },
  },
  decorators: [
    (Story, context) => {
      const [files, setFiles] = useState<File[]>([]);

      return (
        <div style={{ width: 400 }}>
          <Form onSubmit={(e) => e.preventDefault()} noValidate>
            <FileInput
              accept=".png,.jpg"
              label="Add images"
              multiple
              onChange={(e) => {
                if (!e.target.files) return;
                const files = e.target.files;
                setFiles([...files]);
              }}
            />
            <Story
              args={{
                ...context.args,
                images: files,
                onRemove: (index) => {
                  setFiles((prev) => prev.filter((_, i) => i !== index));
                },
              }}
            />
          </Form>
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      include: ['gridPlacement'],
    },
  },
};
