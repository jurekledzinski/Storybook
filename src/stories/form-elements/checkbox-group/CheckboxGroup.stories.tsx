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
        <Checkbox id="wiosna" name="sezon" value="wiosna">
          Wiosna
        </Checkbox>
        <Checkbox id="lato" name="sezon" value="lato">
          Lato
        </Checkbox>
        <Checkbox id="jesień" name="sezon" value="Jesień">
          Jesień
        </Checkbox>
        <Checkbox id="zima" name="sezon" value="zima">
          Zima
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
