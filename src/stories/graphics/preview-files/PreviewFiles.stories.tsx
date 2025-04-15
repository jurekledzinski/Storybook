import { FileInput } from '@src/stories/form-elements/file-input';
import { Meta, StoryObj } from '@storybook/react';
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
              allowTypes={['image/png', 'image/jpeg']}
              accept=".png,.jpg"
              label="Add images"
              multiple
              onChange={(e) => {
                if (!e.target.files) return;
                const files = e.target.files;
                setFiles([...files]);
              }}
              maxSize={[3, 'MB']}
              maxAmount={4}
              onError={(type, details, name) => {
                console.log('Set error value', type, name, details);
              }}
            />
            <Story
              args={{
                ...context.args,
                images: files,
                onRemove: (index) =>
                  setFiles((prev) => prev.filter((_, i) => i !== index)),
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
