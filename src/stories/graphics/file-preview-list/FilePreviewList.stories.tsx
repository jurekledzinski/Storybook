import { FileInput } from '@src/stories/form-elements/file-input';
import { FilePreviewList } from './FilePreviewList';
import { Form } from '@src/stories/form-elements/form';
import { imagesData } from './story';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  FilePreviewCard,
  FilePreviewCloseButton,
  FilePreviewImage,
  FilePreviewTitle,
} from './components';

const meta: Meta<typeof FilePreviewList> = {
  title: 'Components/Graphics/FilePreviewList',
  component: FilePreviewList,
  args: { placement: 'grid' },
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['column', 'grid', 'row'],
    },
  },
  parameters: {
    controls: { include: ['placement'] },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FilePreviewList>;

export const Playground: Story = {
  decorators: [
    (PreviewList, context) => {
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
            <PreviewList
              args={{
                ...context.args,
                images: files,
                render: (file, index, placement) => (
                  <FilePreviewCard placement={placement}>
                    <FilePreviewImage file={file} />
                    <FilePreviewTitle file={file} />
                    <FilePreviewCloseButton
                      onClick={() => {
                        setFiles((prev) => prev.filter((_, i) => i !== index));
                      }}
                    />
                  </FilePreviewCard>
                ),
                children: <>No Images</>,
              }}
            />
          </Form>
        </div>
      );
    },
  ],
};

export const Default: Story = {
  args: {
    images: imagesData,
    render: (file, _, placement) => (
      <FilePreviewCard placement={placement}>
        <FilePreviewImage file={file} />
        <FilePreviewTitle file={file} />
        <FilePreviewCloseButton />
      </FilePreviewCard>
    ),
  },
  parameters: {
    controls: { include: ['placement'] },
  },
};
