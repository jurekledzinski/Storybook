import { convertColors, downloadTxt } from '../utils';
import { MouseEvent, useEffect, useState } from 'react';
import { Scales, UseColorsProps } from './types';

export const useColors = ({ ...props }: UseColorsProps) => {
  const [colorVariables, setColorVariables] = useState<Scales[]>([]);

  const onSave = () => {
    const filteredColors = colorVariables
      .filter((item) => item.colorName !== props.colorName)
      .map((item) => ({ ...item }));

    const mergedColors = [...filteredColors, { ...props }];

    localStorage.setItem('scales', JSON.stringify(mergedColors));

    setColorVariables(mergedColors);
  };

  const onDownload = () => {
    if (!colorVariables.length) return;

    const formattedColors = convertColors(colorVariables);
    downloadTxt(formattedColors);
  };

  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;

    setColorVariables((prev) => prev.filter((item) => item.colorName !== id));

    const savedScales: Scales[] = JSON.parse(localStorage.getItem('scales') || '[]');
    const fileteredScales = savedScales.filter((item) => item.colorName !== id);

    if (fileteredScales.length) localStorage.setItem('scales', JSON.stringify(fileteredScales));
    else localStorage.removeItem('scales');
  };

  useEffect(() => {
    const savedScales: Scales[] = JSON.parse(localStorage.getItem('scales') || '[]');
    if (!savedScales.length) return;
    setColorVariables(savedScales);
  }, []);

  return { colorVariables, onDelete, onDownload, onSave };
};
