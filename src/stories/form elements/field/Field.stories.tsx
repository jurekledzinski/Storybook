import { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Components/Form elements/Field',
  component: Field,
  args: {
    children: (
      <>
        <label htmlFor="1">Name:</label>
        <input type="text" />
        <p>Message name</p>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
};
