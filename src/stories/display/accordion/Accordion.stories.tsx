import { Accordion } from './Accordion';
import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from '@src/stories/buttons/button-group';
import { exampleData, textContent, useAlertStory } from './story';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@src/stories/buttons/icon-button';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@src/app-ui';
import { useState } from 'react';
import {
  AccordionActions,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionInfo,
  AccordionSelect,
} from './components';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Display/Accordion',
  args: {
    color: 'primary',
    variant: 'contained',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'negative', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Playground: Story = {
  decorators: [
    (Accordion, context) => {
      const [open, setOpen] = useState(false);

      return (
        <Accordion
          args={{
            ...context.args,
            id: 'accordion',
            open,
            onClick: () => setOpen((prev) => !prev),
            children: (
              <>
                <AccordionHeader className="p-sm">
                  <AccordionInfo
                    title="Example title"
                    text={new Date().toLocaleString()}
                  />
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionContent className="p-sm">
                  {textContent}
                </AccordionContent>
              </>
            ),
          }}
        />
      );
    },
  ],
  parameters: {
    controls: {
      include: ['color', 'variant'],
    },
  },
};

export const Default: Story = {
  decorators: [
    (Accordion, context) => {
      const { onToggle, openIds } = useAlertStory({ exampleData });

      return (
        <Stack orientation="column" spacing="normal">
          {exampleData.map(({ color, content, date, id, title }) => (
            <Accordion
              key={id}
              args={{
                ...context.args,
                id,
                color,
                open: openIds.includes(id),
                onClick: onToggle,
                children: (
                  <>
                    <AccordionHeader className="p-sm">
                      <AccordionInfo title={title} text={date} />
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionContent className="p-sm">
                      {content}
                    </AccordionContent>
                  </>
                ),
              }}
            />
          ))}
        </Stack>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const DeleteOne: Story = {
  decorators: [
    (Accordion, context) => {
      const { data, onRefresh, onDelete, handleOpen, openIds } = useAlertStory({
        exampleData,
      });

      return (
        <>
          <ButtonGroup className="mb-sm" spacing="tight">
            <IconButton
              color="success"
              icon={[faRefresh]}
              onClick={onRefresh}
            />
          </ButtonGroup>

          <Stack orientation="column" spacing="normal">
            {data.map(({ content, date, id, title }) => (
              <Accordion
                key={id}
                args={{
                  ...context.args,
                  id,
                  open: openIds.includes(id),
                  onClick: handleOpen,
                  children: (
                    <>
                      <AccordionHeader className="p-sm">
                        <AccordionInfo title={title} text={date} />
                        <AccordionIcon />
                        <AccordionActions onDelete={onDelete} />
                      </AccordionHeader>
                      <AccordionContent className="p-sm">
                        {content}
                      </AccordionContent>
                    </>
                  ),
                }}
              />
            ))}
          </Stack>
        </>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};

export const DeleteMany: Story = {
  decorators: [
    (Accordion, context) => {
      const {
        data,
        handleOpen,
        openIds,
        onDeleteMany,
        onRefreshMany,
        onSelectMany,
      } = useAlertStory({
        exampleData,
      });

      return (
        <>
          <ButtonGroup className="mb-sm" spacing="tight">
            <Button
              color="negative"
              label="Delete"
              variant="outlined"
              onClick={onDeleteMany}
            />
            <IconButton
              color="success"
              icon={[faRefresh]}
              onClick={onRefreshMany}
            />
          </ButtonGroup>

          <Stack orientation="column" spacing="normal">
            {data.map(({ content, date, id, title }) => (
              <Accordion
                key={id}
                args={{
                  ...context.args,
                  id,
                  open: openIds.includes(id),
                  onClick: handleOpen,
                  children: (
                    <>
                      <AccordionHeader className="p-sm">
                        <AccordionInfo title={title} text={date} />
                        <AccordionIcon />
                        <AccordionSelect onSelect={onSelectMany} />
                      </AccordionHeader>
                      <AccordionContent className="p-sm">
                        {content}
                      </AccordionContent>
                    </>
                  ),
                }}
              />
            ))}
          </Stack>
        </>
      );
    },
  ],
  parameters: {
    controls: {
      include: [],
    },
  },
};
