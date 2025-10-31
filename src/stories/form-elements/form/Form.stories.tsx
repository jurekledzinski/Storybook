import { Field } from '../field';
import { Form } from './Form';
import { FormGroup } from './components';
import { Input } from '../input';
import { Label } from '../label';
import { Message } from '@src/stories/feedbacks/message';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Components/Form elements/Form',
  argTypes: {
    orientation: {
      control: 'select',
      options: ['row', 'column'],
    },
  },
  render: (args) => (
    <Form {...args} className="g-sm" style={{ width: '20rem' }}>
      <FormGroup>
        <Field>
          <Label>Name</Label>
          <Input />
          <Message color="negative">Name is required</Message>
        </Field>
      </FormGroup>
      <FormGroup>
        <Field>
          <Label>Surname</Label>
          <Input />
          <Message color="negative">Surname is required</Message>
        </Field>
      </FormGroup>
    </Form>
  ),
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Playground: Story = {};

export const Default: Story = { parameters: { controls: { disable: true } } };
