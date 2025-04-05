import { Color, Size } from '@src/stories/types';
import { Meta, StoryObj } from '@storybook/react';
import { Radio, Variant } from './components';
import { RadioGroup, RadioGroupProps } from './';

interface RadioGroupExtendRadioProps extends RadioGroupProps {
  color?: Color;
  size?: Size;
  variant?: Variant;
}

const meta: Meta<RadioGroupExtendRadioProps> = {
  title: 'Components/Form elements/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
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
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'negative',
        'default',
      ],
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
  },
};

export default meta;

type Story = StoryObj<RadioGroupExtendRadioProps>;

export const Default: Story = {
  args: {
    orientation: 'column',
    spacing: 'normal',
  },
  parameters: {
    controls: {
      include: ['color', 'orientation', 'spacing', 'size', 'variant'],
    },
  },
  render: (args) => (
    <RadioGroup orientation={args.orientation} spacing={args.spacing}>
      <Radio
        id="wiosna"
        name="sezon"
        value="wiosna"
        color={args.color}
        size={args.size}
        variant={args.variant}
      >
        Wiosna
      </Radio>
      <Radio
        id="lato"
        name="sezon"
        value="lato"
        color={args.color}
        size={args.size}
        variant={args.variant}
      >
        Lato
      </Radio>
      <Radio
        id="jesień"
        name="sezon"
        value="jesień"
        color={args.color}
        size={args.size}
        variant={args.variant}
      >
        Jesień
      </Radio>
      <Radio
        id="zima"
        name="sezon"
        value="zima"
        color={args.color}
        size={args.size}
        variant={args.variant}
      >
        Zima
      </Radio>
    </RadioGroup>
  ),
};
