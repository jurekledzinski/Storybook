import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from './ButtonGroup';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Components/Buttons/ButtonGroup',
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button label="Button 1" radius="radius-md" />
        <Button label="Button 2" />
        <Button label="Button 3" radius="radius-md" />
      </>
    ),
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
    children: {
      control: 'select',
      options: [
        'buttons contained',
        'buttons outlined',
        'buttons contained full width',
        'buttons outlined full width',
      ],
      mapping: {
        'buttons contained': (
          <>
            <Button label="Button 1" radius="radius-md" />
            <Button label="Button 2" />
            <Button label="Button 3" radius="radius-md" />
          </>
        ),
        'buttons outlined': (
          <>
            <Button label="Button 1" radius="radius-md" variant="outlined" />
            <Button label="Button 2" variant="outlined" />
            <Button label="Button 3" radius="radius-md" variant="outlined" />
          </>
        ),
        'buttons contained full width': (
          <>
            <Button label="Button 1" radius="radius-md" fullWidth />
            <Button label="Button 2" fullWidth />
            <Button label="Button 3" radius="radius-md" fullWidth />
          </>
        ),
        'buttons outlined full width': (
          <>
            <Button
              label="Button 1"
              radius="radius-md"
              variant="outlined"
              fullWidth
            />
            <Button label="Button 2" variant="outlined" fullWidth />
            <Button
              label="Button 3"
              radius="radius-md"
              variant="outlined"
              fullWidth
            />
          </>
        ),
      },
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
