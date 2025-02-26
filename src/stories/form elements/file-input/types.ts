import { BaseButtonProps } from '../../buttons/button/types';

type FileTypes =
  | '.pdf'
  | '.jpg'
  | '.jpeg'
  | '.png'
  | '.doc'
  | '.docx'
  | '.txt'
  | '.xls'
  | '.xlsx'
  | '.csv'
  | '.mp4'
  | '.mp3'
  | '.wav';

export interface FileInputProps extends BaseButtonProps {
  name?: string;
  accept?: FileTypes[];
  multiple?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement>;
}
