import { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { Message } from '../../feedbacks/message/Message';
import { Input } from '../input/Input';
import { Label } from '../label/Label';

const meta: Meta<typeof Field> = {
  title: 'Components/Form elements/Field',
  component: Field,
  args: {
    children: (
      <>
        <Label>Name:</Label>
        <Input label="Name" type="text" variant="basic" placeholder="Name" />
        <Message>Name is required</Message>
      </>
    ),
  },
  parameters: {
    controls: {
      include: [],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <form
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          padding: '0.5rem',
        }}
        noValidate
      >
        <Story />
        <Story />
        <Story />
      </form>
    ),
  ],
};
