import { Button } from '@src/stories/buttons/button';
import { FileInputProps } from './types';
import { forwardRef, Ref } from 'react';
import { getFileInputProps } from './utils';
import { useImperativeHandle, useRef } from 'react';
import { useValidateFiles } from './hooks';

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      allowTypes = ['image/jpeg', 'image/png'],
      disabled,
      maxAmount,
      maxSize,
      onError,
      ...props
    },
    ref: Ref<HTMLInputElement>
  ) => {
    const refInput = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => refInput.current!);

    const { buttonProps, inputProps } = getFileInputProps(props);

    const onChangeInput = useValidateFiles({
      allowTypes,
      maxSize,
      maxAmount,
      onError,
    });

    return (
      <>
        <Button
          onClick={() => refInput.current?.click()}
          disabled={disabled}
          type="button"
          {...buttonProps}
        />
        <input
          disabled={disabled}
          ref={refInput}
          id="file"
          type="file"
          hidden={true}
          onChangeCapture={onChangeInput}
          {...inputProps}
        />
      </>
    );
  }
);
