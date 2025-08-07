import styles from './FileForm.module.css';
import { Box } from '@src/stories/layout';
import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from '@src/stories/buttons/button-group';
import { checkIsError } from '../utils';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Field } from '@src/stories/form-elements/field';
import { Form } from '@src/stories/form-elements/form';
import { Heading } from '@src/stories/typography/heading';
import { Icon } from '@src/stories/graphics/icon';
import { Input } from '@src/stories/form-elements/input';
import { Inputs } from './types';
import { Label } from '@src/stories/form-elements/label';
import { Message } from '@src/stories/feedbacks/message';
import { PreviewFiles } from '@src/stories/graphics/preview-files';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FileInput,
  useValidateFiles,
} from '@src/stories/form-elements/file-input';

export const FileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<Inputs>({ defaultValues: { files: [], name: '' } });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('Submit', data);

  const {
    checkFileType,
    checkMaxAmountFiles,
    checkMaxSize,
    checkRequiredFiles,
  } = useValidateFiles({
    allowTypes: ['image/jpeg'],
    maxSize: [3, 'MB'],
    maxAmount: 2,
  });

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
          <Message variant="error">{errors.name?.message}</Message>
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
          <Message variant="error">{errors.files?.message}</Message>
        </Field>

        <Field>
          <Label>Preview files:</Label>
          <PreviewFiles
            images={[...watch('files')]}
            gridPlacement="column"
            onRemove={(index) => {
              setValue(
                'files',
                [...watch('files')].filter((_, i) => i !== index),
                { shouldValidate: true, shouldDirty: false }
              );
            }}
          >
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
          </PreviewFiles>
        </Field>
        <ButtonGroup mt="mt-md" fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </Form>
    </div>
  );
};
