import { ControlLayout } from './ControlLayout';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { IconEnd } from './components';
import { Input } from '@src/stories/form-elements/input';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ControlLayout> = {
  component: ControlLayout,
  title: 'Components/Layout/ControlLayout',
  args: {},
};

export default meta;

type Story = StoryObj<typeof ControlLayout>;

export const Default: Story = {
  render: (args) => (
    <ControlLayout
      {...args}
      as="input"
      isPending={false}
      isEndIcon={true}
      isStartIcon={false}
      isStatus={false}
    >
      <Input />
      <IconEnd icon={faAt} />
    </ControlLayout>
  ),
  parameters: { controls: { disable: true } },
};
