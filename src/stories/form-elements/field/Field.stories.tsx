import { Field } from './Field';
import { Input } from '../input/Input';
import { Label } from '../label/Label';
import { Message } from '@src/stories/feedbacks/message';
import { Meta, StoryObj } from '@storybook/react-vite';

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
