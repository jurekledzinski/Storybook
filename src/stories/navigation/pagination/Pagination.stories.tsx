import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { PaginationArrow, PaginationInfo, PaginationItems } from './components';
import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  args: {
    totalPages: 1000,
    onChangePage: fn((page, pageSize) => {
      action('onChangePage')({ page, pageSize });
    }),
    children: (
      <>
        <PaginationArrow id="first" label={faAnglesLeft} />
        <PaginationArrow id="prev" label={faChevronLeft} />
        <PaginationItems />
        <PaginationArrow id="next" label={faChevronRight} />
        <PaginationArrow id="last" label={faAnglesRight} />
      </>
    ),
  },
  argTypes: {
    border: {
      control: { type: 'select' },
      options: [
        'undefined',
        'border-xs',
        'border-sm',
        'border-md',
        'border-lg',
        'border-xl',
      ],
    },
    children: {
      control: { type: 'select' },
      options: ['pagination info', 'pagination without info'],
      mapping: {
        'pagination info': (
          <>
            <PaginationArrow id="first" label={faAnglesLeft} />
            <PaginationArrow id="prev" label={faChevronLeft} />
            <PaginationInfo />
            <PaginationArrow id="next" label={faChevronRight} />
            <PaginationArrow id="last" label={faAnglesRight} />
          </>
        ),
        'pagination without info': (
          <>
            <PaginationArrow id="first" label={faAnglesLeft} />
            <PaginationArrow id="prev" label={faChevronLeft} />
            <PaginationItems />
            <PaginationArrow id="next" label={faChevronRight} />
            <PaginationArrow id="last" label={faAnglesRight} />
          </>
        ),
      },
    },
    color: {
      control: { type: 'select' },
      options: ['undefined', 'primary', 'secondary'],
    },
    radius: {
      control: { type: 'select' },
      options: [
        'undefined',
        'radius-xs',
        'radius-sm',
        'radius-md',
        'radius-lg',
        'radius-xl',
      ],
    },
    size: {
      control: 'select',
      options: [
        'undefined',
        'size-xxs',
        'size-xs',
        'size-sm',
        'size-md',
        'size-lg',
      ],
    },
    spacing: {
      control: 'select',
      options: ['none', 'tight', 'normal', 'loose', 'extra-loose'],
    },
    variant: {
      control: 'select',
      options: ['undefined', 'contained', 'outlined', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  parameters: {
    controls: {
      include: [
        'border',
        'children',
        'color',
        'radius',
        'spacing',
        'size',
        'variant',
      ],
    },
  },
};
