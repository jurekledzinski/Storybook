import { InputVariant, Size } from '@src/stories/types';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { SelectList, SelectOption, SelectTrigger } from './components';
import { SelectProps } from './types';
import { useState } from 'react';
import { Stack } from '@src/app-ui';

type SelectExtendTypes = SelectProps & { variant: InputVariant; size?: Size; label?: string };

const meta: Meta<SelectExtendTypes> = {
  title: 'Components/Form elements/Select',
  component: Select,
  args: {
    multiple: false,
    variant: 'basic',
    label: 'Fruit',
  },
  argTypes: {
    label: {
      control: 'text',
      if: { arg: 'variant', eq: ['contained', 'outlined', 'underlined'] },
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['basic', 'contained', 'outlined', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<SelectExtendTypes>;

export const Playground: Story = {
  decorators: [
    (Story, context) => {
      const [multiFruits, setMultiFruits] = useState<string[]>([]);
      const [singleFruit, setSingleFruit] = useState<string>();

      const handleSelect = (value: string) => {
        if (!context.args.multiple) return setSingleFruit(value);

        setMultiFruits((prev) => {
          if (prev.includes(value)) return prev.filter((i) => i !== value);
          else return [...prev, value];
        });
      };

      return (
        <Story
          args={{
            ...context.args,
            value: context.args.multiple ? multiFruits : singleFruit,
            onChange: handleSelect,
            children: (
              <>
                <SelectTrigger
                  label={context.args.label}
                  size={context.args.size}
                  variant={context.args.variant}
                />
                <SelectList>
                  <SelectOption value="apple">Apple</SelectOption>
                  <SelectOption value="banana">Banana</SelectOption>
                  <SelectOption value="mango">Mango</SelectOption>
                  <SelectOption value="kiwi">Kiwi</SelectOption>
                </SelectList>
              </>
            ),
          }}
        />
      );
    },
  ],
  parameters: {
    controls: {
      include: ['multiple', 'size', 'variant'],
    },
  },
};

export const Default: Story = {
  decorators: [
    (Story, context) => {
      const [fruits, setFruits] = useState<string>();
      const handleSelect = (value: string) => setFruits(value);

      const SelectExample = ({ variant }: { variant: InputVariant }) => (
        <Story
          args={{
            ...context.args,
            value: fruits,
            onChange: handleSelect,
            children: (
              <>
                <SelectTrigger label="Fruit" size="size-md" variant={variant} />
                <SelectList>
                  <SelectOption value="apple">Apple</SelectOption>
                  <SelectOption value="banana">Banana</SelectOption>
                  <SelectOption value="mango">Mango</SelectOption>
                  <SelectOption value="kiwi">Kiwi</SelectOption>
                </SelectList>
              </>
            ),
          }}
        />
      );

      return (
        <Stack spacing="extra-loose" orientation="column">
          <SelectExample variant="basic" />
          <SelectExample variant="outlined" />
          <SelectExample variant="contained" />
          <SelectExample variant="underline" />
        </Stack>
      );
    },
  ],
  parameters: { controls: { disable: true } },
};

export const SingleSelect: Story = {
  decorators: [
    (Story, context) => {
      const [fruits, setFruits] = useState<string>();
      const handleSelect = (value: string) => setFruits(value);

      return (
        <Story
          args={{
            ...context.args,
            value: fruits,
            onChange: handleSelect,
            children: (
              <>
                <SelectTrigger size="size-md" variant="basic" />
                <SelectList>
                  <SelectOption value="apple">Apple</SelectOption>
                  <SelectOption value="banana">Banana</SelectOption>
                  <SelectOption value="mango">Mango</SelectOption>
                  <SelectOption value="kiwi">Kiwi</SelectOption>
                </SelectList>
              </>
            ),
          }}
        />
      );
    },
  ],
  parameters: { controls: { disable: true } },
};

export const MultiSelect: Story = {
  decorators: [
    (Story, context) => {
      const [fruits, setFruits] = useState<string[]>([]);

      const handleSelect = (value: string) => {
        setFruits((prev) => {
          if (prev.includes(value)) return prev.filter((i) => i !== value);
          else return [...prev, value];
        });
      };

      return (
        <Story
          args={{
            ...context.args,
            multiple: true,
            value: fruits,
            onChange: handleSelect,
            children: (
              <>
                <SelectTrigger size="size-md" variant="basic" />
                <SelectList>
                  <SelectOption value="apple">Apple</SelectOption>
                  <SelectOption value="banana">Banana</SelectOption>
                  <SelectOption value="mango">Mango</SelectOption>
                  <SelectOption value="kiwi">Kiwi</SelectOption>
                </SelectList>
              </>
            ),
          }}
        />
      );
    },
  ],
  parameters: { controls: { disable: true } },
};
