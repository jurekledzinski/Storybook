import styles from './FileForm.module.css';
import { checkIsError } from '../utils';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Inputs } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  ButtonGroup,
  Field,
  FileInput,
  FilePreviewList,
  Form,
  Heading,
  Icon,
  Input,
  Message,
  Label,
  useValidateFiles,
  FilePreviewCard,
  FilePreviewImage,
  FilePreviewTitle,
  FilePreviewCloseButton,
} from '@src/stories/';

export const FileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<Inputs>({ defaultValues: { files: [], name: '' } });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('Submit', data);

  const { checkFileType, checkMaxAmountFiles, checkMaxSize, checkRequiredFiles } = useValidateFiles(
    {
      allowTypes: ['image/jpeg'],
      maxSize: [3, 'MB'],
      maxAmount: 2,
    }
  );

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Label>Name:</Label>
          <Input
            isError={checkIsError('name', errors, isDirty)}
            {...register('name', {
              required: { message: 'Name is required', value: true },
            })}
          />
          <Message color="negative">{errors.name?.message}</Message>
        </Field>

        <Field>
          <Label>Upload file:</Label>
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
            // onChange={(e) => {
            // Przykład jak dodawać więcej zdjęć nie tracąc innych register musi zostać także z validate do validaci
            // i będzie wszystko działać
            //   const files = e.target.files;
            //   if (!files) return;
            //   setValue('files', [...watch('files'), ...Array.from(files)], {
            //     shouldValidate: true,
            //     shouldDirty: false,
            //   });
            // }}
          />
          <Message color="negative">{errors.files?.message}</Message>
        </Field>

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
                <Box className={styles['group-info']}>
                  <Icon
                    // className={styles['form-icon']}
                    color="primary"
                    icon={faImage}
                    size="4x"
                  />
                  <Heading
                    //   className={styles['form-heading']}
                    fw="fw-900"
                    level={4}
                  >
                    No Images
                  </Heading>
                </Box>
              </FilePreviewCard>
            )}
          ></FilePreviewList>
        </Field>
        <ButtonGroup className="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
