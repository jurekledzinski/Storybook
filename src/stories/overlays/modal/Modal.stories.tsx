import { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { ModalLayout } from './components';
import { ModalProps } from './types';

type ModalPropsType = ModalProps & { variant: 'contained' | 'outlined' };

const meta: Meta<ModalPropsType> = {
  component: Modal,
  title: 'Components/Overlays/Modal',
  args: {
    open: false,
    variant: 'contained',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
    },
  },
};
export default meta;

type Story = StoryObj<ModalPropsType>;

export const Playground: Story = {
  render: (args) => (
    <Modal {...args}>
      <ModalLayout color="negative" title="Delete product" variant={args.variant}>
        Are you sure you want delete this product?
      </ModalLayout>
    </Modal>
  ),
  parameters: { controls: { include: ['open', 'variant'] } },
};

export const Default: Story = {
  render: () => (
    <Modal open={true}>
      <ModalLayout title="Delete product" color="negative" variant="contained">
        Are you sure you want delete this product?
      </ModalLayout>
    </Modal>
  ),
  parameters: { controls: { disable: true } },
};
