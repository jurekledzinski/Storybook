import { Chip } from './Chip';
import { fn } from 'storybook/test';
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  faHome,
  faTrash,
  faTrashCan,
  faTrashAlt,
  faSun,
  faGear,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Components/Display/Chip',
  args: {
    color: 'primary',
    label: 'Chip example',
    size: 'size-sm',
    variant: 'contained',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'negative', 'warning'],
    },
    deleteIcon: {
      control: 'select',
      options: ['none', 'faTrash', 'faTrashAlt', 'faXmark'],
      mapping: {
        none: undefined,
        faTrash,
        faTrashAlt,
        faXmark,
      },
    },
    radius: {
      control: 'select',
      options: [
        'default',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    startIcon: {
      control: 'select',
      options: ['none', 'faHome', 'faGear', 'faSun'],
      mapping: {
        none: undefined,
        faHome,
        faGear,
        faSun,
      },
    },
    startIconSrc: {
      control: 'select',
      options: ['none', 'Beach', 'Desert', 'Desert-view'],
      mapping: {
        none: undefined,
        Beach: '/images/Beach.jpg',
        Desert: '/images/Desert.jpg',
        'Desert-view': '/images/Desert-view.jpg',
      },
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Playground: Story = {
  args: { onDelete: fn() },
  parameters: {
    controls: {
      exclude: ['onDelete'],
    },
  },
};

export const Default: Story = {
  parameters: { controls: { include: [] } },
};

export const WithIcon: Story = {
  args: {
    startIcon: faHome,
  },
  parameters: { controls: { include: [] } },
};

export const WithImage: Story = {
  args: {
    startIconSrc: '/images/Desert.jpg',
  },
  parameters: { controls: { include: [] } },
};

export const Delete: Story = {
  args: {
    deleteIcon: faTrashCan,
    onDelete: fn(),
  },
  parameters: { controls: { include: [] } },
};
