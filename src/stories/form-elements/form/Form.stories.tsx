import { Message } from '@src/stories/feedbacks/message';
import { Field } from '../field';
import { Input } from '../input';
import { Label } from '../label';
import { FormGroup } from './components';
import { Form } from './Form';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Components/Form elements/Form',
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
  },
  render: (args) => (
    <div style={{ width: '100%' }}>
      <Form orientation={args.orientation}>
        <FormGroup>
          <Field>
            <Label>Name</Label>
            <Input />
            <Message variant="error">Name is required</Message>
          </Field>
        </FormGroup>
        <FormGroup>
          <Field>
            <Label>Name</Label>
            <Input />
            <Message variant="error">Name is required</Message>
          </Field>
        </FormGroup>
      </Form>
    </div>
  ),
};
