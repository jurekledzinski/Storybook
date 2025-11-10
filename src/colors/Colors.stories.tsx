import { ColorsContainer } from './ColorsContainer';
import { ColorsContainerProps } from './types';
import { generateArgs, generateControls } from './utils';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Scales } from './hooks';
import { useArgs } from '@storybook/client-api';
import { useCallback, useEffect, useMemo, useRef } from 'react';

const colorsOptions = ['primary', 'secondary', 'success', 'negative', 'warning', 'info'];

const initialArgs = {
  ...generateArgs(4, 'hue'),
  ...generateArgs(4, 'saturation'),
  ...generateArgs(13, 'lightness'),
};

const initialArgsTypes = {
  ...generateControls(4, 'Hue', 360),
  ...generateControls(4, 'Saturation', 100),
  ...generateControls(13, 'Lightness', 100),
};

const meta: Meta<ColorsContainerProps> = {
  component: ColorsContainer,
  title: 'Colors/Colors',
  args: {
    colorName: 'primary',
    ...initialArgs,
  },
  argTypes: {
    colorName: {
      control: 'select',
      options: colorsOptions,
      name: 'Color name',
    },
    ...initialArgsTypes,
  },
};
export default meta;

type Story = StoryObj<ColorsContainerProps>;

export const Playground: Story = {
  decorators: [
    (Story, context) => {
      const [args, updateArgs] = useArgs();
      //   const prevColorName = useRef(args.colorName);
      const prevColorName = useRef('');

      const getLocalScales = useCallback(() => {
        const savedScales: Scales[] = JSON.parse(localStorage.getItem('scales') || '[]');
        const obj = savedScales.find((item) => item.colorName === args.colorName);
        return obj;
      }, [args.colorName]);

      const updateArgsStory = useCallback(
        (objArgs: ColorsContainerProps) => {
          const isSameColor = Object.entries(objArgs).every(
            ([key, val]) => args[key as keyof typeof objectArgs] === val
          );

          if (!isSameColor) updateArgs(objArgs);
        },
        [args, updateArgs]
      );

      const objectArgs = useMemo(() => {
        return getLocalScales();
      }, [getLocalScales]);

      useEffect(() => {
        if (args.colorName === prevColorName.current) return;
        prevColorName.current = args.colorName;

        if (objectArgs) updateArgsStory(objectArgs);
        else updateArgsStory(initialArgs);
      }, [args, objectArgs, updateArgsStory]);

      return <Story args={context.args} />;
    },
  ],
};
