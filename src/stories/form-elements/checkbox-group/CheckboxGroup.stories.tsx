import { Checkbox } from '../checkbox/Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Form elements/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    orientation: 'row',
    spacing: 'normal',
    children: (
      <>
        <Checkbox id="apple" name="fruits" value="apple">
          Apple
        </Checkbox>
        <Checkbox id="mango" name="fruits" value="mango">
          Mango
        </Checkbox>
        <Checkbox id="kiwi" name="fruits" value="kiwi">
          Kiwi
        </Checkbox>
        <Checkbox id="banan" name="fruits" value="banan">
          Banan
        </Checkbox>
      </>
    ),
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['row', 'column'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'tight', 'normal', 'loose', 'extra-loose'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Playground: Story = {
  parameters: {
    controls: {
      include: ['orientation', 'spacing'],
    },
  },
};

export const Default: Story = {
  parameters: { controls: { disable: true } },
};
