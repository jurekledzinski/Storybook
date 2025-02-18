import { Input } from './Input';
import { Meta, StoryObj } from '@storybook/react';
// import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof Input> = {
  title: 'Components/Form elements/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Name',
    variant: 'basic',
    type: 'text',
    as: 'input',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
    },
    cols: {
      control: { type: 'select' },
      options: [3, 4],
      table: {
        category: 'Specific',
      },
      if: { arg: 'as', eq: 'textarea' },
    },
    rows: {
      control: {
        type: 'select',
      },
      options: [1, 4, 8, 12],
      table: {
        category: 'Specific',
      },
      if: { arg: 'as', eq: 'textarea' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
      if: { arg: 'as', eq: 'input' },
    },
    type: {
      control: { type: 'select' },
      options: ['email', 'number', 'password', 'text'],
      if: { arg: 'as', eq: 'input' },
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
  decorators: [
    (Story) => {
      return (
        <form style={{ width: 400 }} noValidate>
          <Story />
        </form>
      );
    },
  ],
  parameters: {
    controls: {
      include: ['as', 'cols', 'rows', 'size', 'type', 'variant'],
    },
  },

  //   render: function Render(args) {
  //     const [{ as }, updateArgs] = useArgs();

  //     console.log('as', as);

  //     useEffect(() => {
  //       if (as === 'input') {
  //         updateArgs({
  //           args: {
  //             as: 'input',
  //             size: 'medium',
  //             label: 'Input name',
  //             variant: 'outlined',
  //             type: 'text',
  //           },
  //         });
  //       }
  //     }, [as, updateArgs]);

  //     return <Input {...args} />;
  //   },
};
