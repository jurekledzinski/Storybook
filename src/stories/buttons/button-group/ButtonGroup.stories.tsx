import styles from './ButtonGroup.module.css';
import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from './ButtonGroup';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Components/Buttons/ButtonGroup',
  args: {
    fullWidth: false,
    orientation: 'row',
    spacing: 'tight',
  },
  argTypes: {
    aligment: {
      control: 'select',
      options: [
        'none',
        'aligment-start',
        'aligment-end',
        'aligment-center',
        'stretch',
      ],
    },
    justify: {
      control: 'select',
      options: [
        'none',
        'justify-end',
        'justify-start',
        'justify-center',
        'space-around',
        'space-between',
        'space-evenly',
      ],
    },
    orientation: {
      control: 'select',
      options: ['row', 'column'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'tight', 'normal', 'loose', 'extra-loose'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Playground: Story = {
  decorators: [
    (Story, context) => {
      return (
        <Story
          args={{
            ...context.args,
            children: (
              <>
                <Button label="Button 1" radius="radius-md" />
                <Button label="Button 2" />
                <Button label="Button 3" radius="radius-md" />
              </>
            ),
          }}
        />
      );
    },
  ],
};

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <Story
        args={{
          ...context.args,
          className: styles.backgroundColor,
          children: (
            <>
              <Button label="Button 1" radius="radius-md" />
              <Button label="Button 2" />
              <Button label="Button 3" radius="radius-md" />
            </>
          ),
        }}
      />
    ),
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <Story
        args={{
          orientation: 'column',
          spacing: 'tight',
          children: (
            <>
              <Button label="Button 1" radius="radius-md" />
              <Button label="Button 2" />
              <Button label="Button 3" radius="radius-md" />
            </>
          ),
        }}
      />
    ),
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const Justified: Story = {
  decorators: [
    (Story) => (
      <Story
        args={{
          fullWidth: true,
          justify: 'space-between',
          spacing: 'tight',
          orientation: 'row',
          children: (
            <>
              <Button label="Button 1" radius="radius-md" />
              <Button label="Button 2" />
              <Button label="Button 3" radius="radius-md" />
            </>
          ),
        }}
      />
    ),
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};
