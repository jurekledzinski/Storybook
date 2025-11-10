import styles from './PalletCard.module.css';
import { Card, CardContent, CardHeader, Heading, IconButton } from '@src/stories';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { inlineVariables } from '@src/colors/utils';
import { PalletCardProps } from './types';

export const PalletCard = ({ children, colorName, title, onDelete, ...props }: PalletCardProps) => {
  const inline = inlineVariables(props);

  return (
    <Card className={styles.card} style={inline}>
      <CardHeader className={styles.header}>
        <Heading className={styles.heading} level={5}>
          {title} {colorName}
        </Heading>

        {onDelete ? (
          <IconButton
            id={colorName}
            color="negative"
            icon={[faTrashAlt]}
            size="size-xxs"
            variant="outlined"
            onClick={onDelete}
            type="button"
          />
        ) : null}
      </CardHeader>

      <CardContent className={styles.content} style={inline}>
        {children}
      </CardContent>
    </Card>
  );
};
