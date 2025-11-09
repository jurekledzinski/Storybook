import styles from './DropFileForm.module.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InputsDropFileForm } from './types';
import {
  Box,
  Button,
  ButtonGroup,
  DropZone,
  Field,
  FileInput,
  FilePreviewList,
  Icon,
  Heading,
  Message,
  Label,
  useValidateFiles,
  FilePreviewCard,
  FilePreviewImage,
  FilePreviewTitle,
  FilePreviewCloseButton,
} from '@src/stories';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export const DropFileForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<InputsDropFileForm>({
    defaultValues: {
      files: [],
    },
  });

  const onSubmit: SubmitHandler<InputsDropFileForm> = (data) => {
    console.log('Submit', data);
  };

  const { checkFileType, checkMaxAmountFiles, checkMaxSize, checkRequiredFiles } = useValidateFiles(
    {
      allowTypes: ['image/jpeg'],
      maxSize: [3, 'MB'],
      maxAmount: 2,
    }
  );

  const mergeFiles = (oldFiles: File[], newFiles: File[]) => {
    const fileMap = new Map();
    [...oldFiles, ...newFiles].forEach((file) => {
      const key = `${file.name}-${file.size}`;
      fileMap.set(key, file);
    });

    return Array.from(fileMap.values());
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box style={{ margin: '0.5rem 0', height: 200 }}>
          <Controller
            name="files"
            control={control}
            rules={{
              validate: (files) => {
                const type = checkFileType(files);
                const maxAmount = checkMaxAmountFiles(files);
                const maxSize = checkMaxSize(files);
                const required = checkRequiredFiles(files);

                if (type !== true) return type;
                if (maxAmount !== true) return maxAmount;
                if (maxSize !== true) return maxSize;
                if (required !== true) return required;

                return true;
              },
            }}
            render={({ field: { onChange, ...rest } }) => (
              <DropZone
                onDrop={(e) => {
                  const dropped = Array.from(e.dataTransfer.files);
                  const mergedFiles = mergeFiles(watch('files'), dropped);
                  onChange(mergedFiles);
                }}
                {...rest}
                title="Drag and drop"
              >
                <FileInput
                  accept=".jpg"
                  label="Add images"
                  multiple
                  {...register('files', {
                    validate: (files) => {
                      const type = checkFileType(files);
                      const maxAmount = checkMaxAmountFiles(files);
                      const maxSize = checkMaxSize(files);
                      const required = checkRequiredFiles(files);

                      if (type !== true) return type;
                      if (maxAmount !== true) return maxAmount;
                      if (maxSize !== true) return maxSize;
                      if (required !== true) return required;

                      return true;
                    },
                  })}
                  onChange={(e) => {
                    //   Przykład jak dodawać więcej zdjęć nie tracąc innych register musi zostać także z validate do validaci
                    //   i będzie wszystko działać
                    if (!e.target.files) return;
                    const dropped = Array.from(e.target.files);
                    const mergedFiles = mergeFiles(watch('files'), dropped);

                    setValue('files', mergedFiles, {
                      shouldValidate: true,
                      shouldDirty: false,
                    });
                  }}
                />
                <Message color="negative">{errors.files?.message}</Message>
              </DropZone>
            )}
          />
        </Box>
        <Field>
          <Label>Preview files:</Label>
          <FilePreviewList
            images={[...watch('files')]}
            placement="column"
            render={(file, index, placement) => (
              <FilePreviewCard placement={placement}>
                <FilePreviewImage file={file} />
                <FilePreviewTitle file={file} />
                <FilePreviewCloseButton
                  onClick={() => {
                    setValue(
                      'files',
                      [...watch('files')].filter((_, i) => i !== index),
                      { shouldValidate: true, shouldDirty: false }
                    );
                  }}
                />
              </FilePreviewCard>
            )}
          >
            <Box className={styles['group-info']}>
              <Icon color="primary" icon={faImage} size="4x" />
              <Heading fw="fw-900" level={4}>
                No Images
              </Heading>
            </Box>
          </FilePreviewList>
        </Field>
        <ButtonGroup className="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </form>
    </div>
  );
};
