import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import {
  SelectOption,
  SelectList,
  SelectPanel,
  SelectTrigger,
} from './components';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Form elements/Select',
  component: Select,
  args: {
    // variant: 'contained',
  },
  argTypes: {
    isError: {
      control: 'select',
      options: ['none', 'true', 'false'],
      mapping: {
        none: undefined,
        true: true,
        false: false,
      },
    },
    size: {
      control: { type: 'select' },
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SelectTrigger endIcon={[faChevronUp, faChevronDown]} />
        <SelectPanel>
          <SelectList>
            <SelectOption id="red">Red</SelectOption>
            <SelectOption id="green">Green</SelectOption>
            <SelectOption id="orange">Orange</SelectOption>
            <SelectOption id="blue">Blue</SelectOption>
            <SelectOption id="yellow">Yellow</SelectOption>
            <SelectOption id="purple">Purple</SelectOption>
          </SelectList>
        </SelectPanel>
      </>
    ),
    label: 'Colors',
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState('');

      return (
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <Story
            args={{
              ...context.args,
              value,
              onChange: (value) => setValue(value),
            }}
          />
        </form>
      );
    },
  ],
  parameters: {
    controls: {
      include: ['isError', 'size', 'variant'],
    },
  },
};

// ----------------------

// export const FunctionWay: Story = {
//   args: {
//     children: (
//       <>
//         <SelectTrigger endIcon={[faChevronUp, faChevronDown]} />
//         <SelectPanel>
//           {(item) => {
//             return (
//               <SelectOption id={item.key} key={item.key}>
//                 {item.value}
//               </SelectOption>
//             );
//           }}
//         </SelectPanel>
//       </>
//     ),
//     items: [
//       { key: 'red', value: 'Red' },
//       { key: 'green', value: 'Green' },
//       { key: 'orange', value: 'Orange' },
//     ],
//     label: 'Colors',
//   },
//   decorators: [
//     (Story, context) => {
//       const [value, setValue] = useState('');

//       return (
//         <form onSubmit={(e) => e.preventDefault()} noValidate>
//           <Story
//             args={{
//               ...context.args,
//               value,
//               onChange: (value) => setValue(value),
//             }}
//           />
//         </form>
//       );
//     },
//   ],
//   parameters: {
//     controls: {
//       include: ['isError', 'size', 'variant'],
//     },
//   },
// };
