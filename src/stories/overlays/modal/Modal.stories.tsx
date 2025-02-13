import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useControlModal } from './useControlModal';
import styles from './Modal.module.css';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Overlays/Modal',
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const { onClose, onOpen, isOpen } = useControlModal();

      return (
        <div>
          <button onClick={onOpen}>Show Modal</button>
          <Story
            args={{
              children: <>Example text</>,
              isOpen,
              onClose,
              title: 'Example title',
            }}
          />
        </div>
      );
    },
  ],
};

export const Delete: Story = {
  decorators: [
    (Story) => {
      const { onClose, onOpen, isOpen } = useControlModal();

      return (
        <div>
          <button onClick={onOpen}>Show modal delete</button>
          <Story
            args={{
              children: <>Example text</>,
              isOpen,
              onClose,
              title: 'Example title',
              customStyle: {
                header: styles.headerDelete,
              },
            }}
          />
        </div>
      );
    },
  ],
};

export const Warning: Story = {
  decorators: [
    (Story) => {
      const { onClose, onOpen, isOpen } = useControlModal();

      return (
        <div>
          <button onClick={onOpen}>Show modal warning</button>
          <Story
            args={{
              children: <>Example text</>,
              isOpen,
              onClose,
              title: 'Example title',
              customStyle: {
                header: styles.headerWarning,
              },
            }}
          />
        </div>
      );
    },
  ],
};

export const Success: Story = {
  decorators: [
    (Story) => {
      const { onClose, onOpen, isOpen } = useControlModal();

      return (
        <div>
          <button onClick={onOpen}>Show modal success</button>
          <Story
            args={{
              children: <>Example text</>,
              isOpen,
              onClose,
              title: 'Example title',
              customStyle: {
                header: styles.headerSuccess,
              },
            }}
          />
        </div>
      );
    },
  ],
};

export const Info: Story = {
  decorators: [
    (Story) => {
      const { onClose, onOpen, isOpen } = useControlModal();

      return (
        <div>
          <button onClick={onOpen}>Show modal info</button>
          <Story
            args={{
              children: <>Example text</>,
              isOpen,
              onClose,
              title: 'Example title',
              customStyle: {
                header: styles.headerInfo,
              },
            }}
          />
        </div>
      );
    },
  ],
};
