import { Button } from '../../buttons/button/Button';
import { FileInputProps } from './types';
import { useImperativeHandle, useRef } from 'react';

export const FileInput = ({
  accept,
  label,
  multiple,
  name,
  size = 'small',
  variant = 'contained',
  onChange,
  ref,
  ...props
}: FileInputProps) => {
  const refInput = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => refInput.current!);

  return (
    <>
      <Button
        label={label}
        onClick={() => refInput.current?.click()}
        size={size}
        variant={variant}
        {...props}
      />
      <input
        accept={accept?.join(', ')}
        ref={refInput}
        id="file"
        type="file"
        name={name}
        multiple={multiple}
        hidden={true}
        onChange={onChange}
      />
    </>
  );
};
