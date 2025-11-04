import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ValidationChecklist } from './ValidationChecklist';
import { ValidationItem } from './components';

const meta: Meta<typeof ValidationChecklist> = {
  component: ValidationChecklist,
  title: 'Components/Form elements/ValidationChecklist',
  args: {
    icons: [faCheck, faXmark],
  },
};
export default meta;

type Story = StoryObj<typeof ValidationChecklist>;

export const Default: Story = {
  render: (args) => (
    <ValidationChecklist {...args}>
      <ValidationItem id="min" isValid={false}>
        Password must be at least 8 characters
      </ValidationItem>
      <ValidationItem id="uppecase" isValid={false}>
        Must include at least one uppercase letter
      </ValidationItem>
      <ValidationItem id="lowercase" isValid={false}>
        Must include at least one lowercase letter
      </ValidationItem>
      <ValidationItem id="number" isValid={false}>
        Must include at least one number
      </ValidationItem>
      <ValidationItem id="special" isValid={false}>
        Must include at least one special character: @#!
      </ValidationItem>
      <ValidationItem id="space" isValid={true}>
        Must not contain spaces
      </ValidationItem>
      <ValidationItem id="sameValues" isValid={true}>
        Passwords do not match
      </ValidationItem>
    </ValidationChecklist>
  ),
  parameters: { controls: { disable: true } },
};
