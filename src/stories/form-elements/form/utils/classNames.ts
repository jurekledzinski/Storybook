import styles from '../Form.module.css';
import { classNames } from '@src/stories/helpers';
import { Orientation } from '@src/stories/types';

export const getClassForm = (orientation?: Orientation) => ({
  form: classNames(styles.form, orientation ? styles[orientation] : ''),
  formGroup: classNames(
    styles['form-group'],
    orientation ? styles[orientation] : ''
  ),
});
