import { Button } from '@src/stories/buttons/button';
import { FileInputProps } from './types';
import { useImperativeHandle, useRef } from 'react';
import { useValidateFiles } from './hooks';

export const FileInput = ({
  accept,
  allowTypes,
  multiple,
  name,
  size = 'size-sm',
  variant = 'contained',
  onChange,
  maxAmount,
  maxSize,
  ref,
  onError,
  ...props
}: FileInputProps) => {
  const refInput = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => refInput.current!);

  const onChangeInput = useValidateFiles({
    allowTypes,
    maxSize,
    maxAmount,
    onError,
  });

  //   Sprawdz czy max length sprawdza ile files dodaje
  //   Ale to chyba by działało tylko z react hooks form

  return (
    <>
      <Button
        onClick={() => refInput.current?.click()}
        size={size}
        variant={variant}
        {...props}
      />
      <input
        accept={accept}
        ref={refInput}
        id="file"
        type="file"
        name={name}
        multiple={multiple}
        hidden={true}
        onChangeCapture={onChangeInput}
        onChange={onChange}
      />
    </>
  );
};
