import './stories/main.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form } from './stories/form-elements/form';
import { Field } from './stories/form-elements/field';
import { Message } from './stories/feedbacks/message';
import { FileInput } from './stories/form-elements/file-input';
import { Label } from '@src/stories/form-elements/label';
import { Input } from './stories/form-elements/input';
import { Button } from './stories/buttons/button';
import { ButtonGroup } from './stories/buttons/button-group';

import { PreviewFiles } from './stories/graphics/preview-files';

type Inputs = {
  name: string;
  files: File[];
};

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { files: [], name: '' } });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log('errors', errors?.name);

  const onErrorFile = () => {};

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field>
          <Label>Name:</Label>
          <Input
            isError={undefined}
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
            onError={onErrorFile}
            multiple
            {...register('files', {
              required: { message: 'Files are required', value: true },
              validate: (files) => files.length <= 2 || 'Only 2 files allowed',
            })}
          />
          <Message variant="error">{errors.files?.message}</Message>
        </Field>

        <Field>
          <Label>Preview files:</Label>
          <PreviewFiles
            images={[...watch('files')]}
            gridPlacement="grid"
            onRemove={(index) => {
              setValue(
                'files',
                [...watch('files')].filter((_, i) => i !== index),
                { shouldValidate: true, shouldDirty: true }
              );
            }}
          />
        </Field>
        <ButtonGroup marginTop={16} fullWidth>
          <Button label="Submit" fullWidth color="success" size="size-lg" />
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default App;
