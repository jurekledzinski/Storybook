import { ColorsContainerProps } from '../types';

export const inlineVariables = (params: Omit<ColorsContainerProps, 'colorName'>) => {
  const {
    hue1,
    hue2,
    hue3,
    hue4,
    saturation1,
    saturation2,
    saturation3,
    saturation4,
    lightness1,
    lightness2,
    lightness3,
    lightness4,
    lightness5,
    lightness6,
    lightness7,
    lightness8,
    lightness9,
    lightness10,
    lightness11,
    lightness12,
    lightness13,
  } = params;

  return {
    ...(hue1 ? { '--hue-1': hue1 } : {}),
    ...(hue2 ? { '--hue-2': hue2 } : {}),
    ...(hue3 ? { '--hue-3': hue3 } : {}),
    ...(hue4 ? { '--hue-4': hue4 } : {}),
    ...(saturation1 ? { '--sat-1': `${saturation1}%` } : {}),
    ...(saturation2 ? { '--sat-2': `${saturation2}%` } : {}),
    ...(saturation3 ? { '--sat-3': `${saturation3}%` } : {}),
    ...(saturation4 ? { '--sat-4': `${saturation4}%` } : {}),

    ...(lightness1 ? { '--l-50': `${lightness1}%` } : {}),
    ...(lightness2 ? { '--l-100': `${lightness2}%` } : {}),
    ...(lightness3 ? { '--l-200': `${lightness3}%` } : {}),
    ...(lightness4 ? { '--l-300': `${lightness4}%` } : {}),
    ...(lightness5 ? { '--l-400': `${lightness5}%` } : {}),

    ...(lightness6 ? { '--l-500': `${lightness6}%` } : {}),
    ...(lightness7 ? { '--l-600': `${lightness7}%` } : {}),
    ...(lightness8 ? { '--l-700': `${lightness8}%` } : {}),
    ...(lightness9 ? { '--l-800': `${lightness9}%` } : {}),

    ...(lightness10 ? { '--l-900': `${lightness10}%` } : {}),
    ...(lightness11 ? { '--l-1000': `${lightness11}%` } : {}),
    ...(lightness12 ? { '--l-1100': `${lightness12}%` } : {}),
    ...(lightness13 ? { '--l-1200': `${lightness13}%` } : {}),
  } as React.CSSProperties;
};
