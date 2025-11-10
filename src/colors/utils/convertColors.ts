import tinycolor from 'tinycolor2';
import { ColorsContainerProps } from '../types';

const getHSL = (hue: number, sat: number, ligthness: number) => {
  return `hsl(${hue}, ${sat}, ${ligthness})`;
};

const generateColors = (name: string, shades: number[][]) => {
  const colorsHSL: Record<string, string> = {};
  const colorsHEX: Record<string, string> = {};

  for (const [hue, sat, light, level] of shades) {
    const key = `--color-${name}-${level}`;
    const hsl = getHSL(hue, sat, light);

    colorsHSL[key] = hsl;
    colorsHEX[key] = tinycolor(hsl).toHexString();
  }

  return { colorsHSL, colorsHEX };
};

export const convertColors = (colors: ColorsContainerProps[]) => {
  const allColors: Record<string, object> = { hex: {}, hsl: {} };

  for (const item of colors) {
    const shades = [
      [item.hue1, item.saturation1, item.lightness1, 50],
      [item.hue1, item.saturation1, item.lightness2, 100],
      [item.hue1, item.saturation1, item.lightness3, 200],
      [item.hue1, item.saturation1, item.lightness4, 300],
      [item.hue2, item.saturation2, item.lightness5, 400],
      [item.hue2, item.saturation2, item.lightness6, 500],
      [item.hue2, item.saturation2, item.lightness7, 600],
      [item.hue3, item.saturation3, item.lightness8, 700],
      [item.hue3, item.saturation3, item.lightness9, 800],
      [item.hue3, item.saturation3, item.lightness10, 900],
      [item.hue4, item.saturation4, item.lightness11, 1000],
      [item.hue4, item.saturation4, item.lightness12, 1100],
      [item.hue4, item.saturation4, item.lightness13, 1200],
    ];

    const { colorsHEX, colorsHSL } = generateColors(item.colorName, shades);
    allColors.hex = { ...allColors.hex, ...colorsHEX };
    allColors.hsl = { ...allColors.hsl, ...colorsHSL };
  }

  return allColors;
};
