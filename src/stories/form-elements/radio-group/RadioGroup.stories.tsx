import { Radio } from './components';
import { RadioGroup } from './RadioGroup';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Form elements/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Radio id="wiosna" name="sezon" value="wiosna">
          Wiosna
        </Radio>
        <Radio id="lato" name="sezon" value="lato">
          Lato
        </Radio>
        <Radio id="jesień" name="sezon" value="Jesień">
          Jesień
        </Radio>
        <Radio id="zima" name="sezon" value="zima">
          Zima
        </Radio>
      </>
    ),
    orientation: 'row',
    spacing: 'none',
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
    controls: {
      include: ['orientation', 'spacing'],
    },
  },
};
