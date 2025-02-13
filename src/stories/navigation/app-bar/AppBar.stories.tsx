import styles from './AppBar.module.css';
import { AppBar } from './AppBar';
import type { Meta, StoryObj } from '@storybook/react';
import { classNames } from '../../helpers/classNames';

const meta: Meta<typeof AppBar> = {
  args: {
    children: 'App bar',
  },
  component: AppBar,
  title: 'Components/Navigation/App bar',
};

export default meta;

type Story = StoryObj<typeof AppBar>;

export const Defualt: Story = {
  args: {
    children: 'Top',
    className: styles.headerHorizontal,
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorVerticalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat rerum quam dolorum est explicabo provident tempora et maiores
        </div>
      </div>
    ),
  ],
};

export const Top: Story = {
  args: {
    children: 'Top',
    className: styles.headerHorizontal,
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorVerticalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat rerum quam dolorum est explicabo provident tempora et maiores
        </div>
      </div>
    ),
  ],
};

export const Right: Story = {
  args: {
    children: 'Right',
    className: classNames(styles.headerVertical, styles.headerRight),
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorHorizontalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          minus cum obcaecati eligendi laborum ipsam at harum alias error
        </div>
      </div>
    ),
  ],
};

export const Bottom: Story = {
  args: {
    children: 'Bottom',
    className: classNames(styles.headerHorizontal, styles.headerBottom),
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorVerticalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime
          labore earum tempora porro corrupti molestias alias consequuntur
        </div>
      </div>
    ),
  ],
};

export const Left: Story = {
  args: {
    children: 'Left',
    className: styles.headerVertical,
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorHorizontalContainer
        )}
      >
        <Story />
        <div className={classNames(styles.container, styles.decoratorContent)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          blanditiis ipsa perspiciatis mollitia ducimus fugiat facere a
        </div>
      </div>
    ),
  ],
};
