import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useControlModal } from './hooks/useControlModal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Overlays/Modal',
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    confirmText: 'Confirm',
    isOpen: false,
    isPending: false,
    isSuccess: false,
    title: 'Modal title',
    variant: 'delete',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['delete', 'info', 'neutral', 'primary', 'success', 'warning'],
    },
  },
  decorators: [
    (Story, context) => {
      const { args } = context;
      const { onClose, onOpen, isOpen } = useControlModal();

      return (
        <div>
          <button onClick={onOpen}>Show Modal</button>
          <Story
            args={{
              children: <div>Are you sure you want confirm it?</div>,
              isOpen: isOpen,
              isPending: args.isPending,
              isSuccess: args.isSuccess,
              title: args.title,
              onClose,
              confirmText: args.confirmText,
              onCancel: onClose,
              variant: args.variant,
              onSuccess: fn(() => {
                action('onSuccess')('Submit form with success');
              }),
            }}
          />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      include: [
        'confirmText',
        'isOpen',
        'isPending',
        'isSuccess',
        'title',
        'variant',
      ],
    },
  },
};
