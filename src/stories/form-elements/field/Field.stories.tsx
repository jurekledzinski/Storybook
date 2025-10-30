import { Field } from './Field';
import { Input } from '../input/Input';
import { Label } from '../label/Label';
import { Message } from '@src/stories/feedbacks/message';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Field> = {
  title: 'Components/Form elements/Field',
  component: Field,
  parameters: { controls: { disable: true } },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Name:</Label>
      <Input label="Name" type="text" variant="basic" placeholder="Name" />
      <Message>Name is required</Message>
    </Field>
  ),
};
