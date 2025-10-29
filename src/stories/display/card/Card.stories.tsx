import styles from './Card.module.css';
import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from '@src/stories/buttons/button-group';
import { Card } from './Card';
import { CardContent, CardFooter, CardHeader } from './components';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Display/Card',
  args: {
    className: styles.card,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  decorators: [
    (Card, context) => {
      return (
        <Card
          args={{
            ...context.args,
            children: (
              <>
                <CardHeader className={`${styles.header} p-sm`}></CardHeader>
                <CardContent className={`${styles.content} p-sm`}>
                  <h3 className="mb-xs">Title</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  sit labore, quidem beatae necessitatibus excepturi, fugit
                  distinctio quis dolores quos numquam animi obcaecati odio
                  sequi quasi natus.
                </CardContent>
                <CardFooter className={`${styles.footer} p-sm`}>
                  <ButtonGroup fullWidth justify="justify-end">
                    <Button label="Read more ..." size="size-sm" />
                  </ButtonGroup>
                </CardFooter>
              </>
            ),
          }}
        />
      );
    },
  ],
  parameters: { controls: { disable: true } },
};
