import { Color, Size } from '@src/stories/types';
import { getRadioData } from './story';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, VariantRadio } from './components';
import { RadioGroup, RadioGroupProps } from './';

interface RadioGroupExtendRadioProps extends RadioGroupProps {
  color?: Color;
  size?: Size;
  variant?: VariantRadio;
}

const meta: Meta<RadioGroupExtendRadioProps> = {
  title: 'Components/Form elements/RadioGroup',
  component: RadioGroup,
  args: {
    orientation: 'column',
    spacing: 'normal',
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
      control: 'select',
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

export const Playground: Story = {
  render: (args) => (
    <RadioGroup spacing={args.spacing} orientation={args.orientation}>
      {getRadioData('filled').map((data) => (
        <Radio
          key={data.id}
          id={data.id}
          name={data.name}
          value={data.name}
          color={args.color}
          size={args.size}
          variant={args.variant}
        >
          {data.id.charAt(0).toUpperCase() + data.id.substring(1)}
        </Radio>
      ))}
    </RadioGroup>
  ),
  parameters: {
    controls: {
      include: ['color', 'orientation', 'spacing', 'size', 'variant'],
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      {getRadioData('filled').map((data) => (
        <Radio
          key={data.id}
          id={data.id}
          name={data.name}
          value={data.name}
          color={data.color}
          size={args.size}
          variant={data.variant}
        >
          {data.id.charAt(0).toUpperCase() + data.id.substring(1)}
        </Radio>
      ))}
      {getRadioData('outlined').map((data, index) => (
        <Radio
          key={data.id + index}
          id={data.id + index}
          name={data.name}
          value={data.name}
          color={data.color}
          size={args.size}
          variant={data.variant}
        >
          {data.id.charAt(0).toUpperCase() + data.id.substring(1)}
        </Radio>
      ))}
    </RadioGroup>
  ),
  parameters: { controls: { disable: true } },
};
