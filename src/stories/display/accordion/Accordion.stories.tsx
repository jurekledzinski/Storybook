import { Accordion } from './Accordion';
import { Button } from '@src/stories/buttons/button';
import { ButtonGroup } from '@src/stories/buttons/button-group';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@src/stories/buttons/icon-button';
import { Meta, StoryObj } from '@storybook/react-vite';
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
                <AccordionHeader p="p-sm">
                  <AccordionInfo
                    title="Example title"
                    text={new Date().toLocaleString()}
                  />
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionContent p="p-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  sit labore, quidem beatae necessitatibus excepturi, fugit
                  distinctio quis dolores quos numquam animi obcaecati odio
                  sequi quasi natus.
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

const exampleData = [
  {
    id: 1,
    title: 'Title 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: 'Title 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: 'Title 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    date: new Date().toLocaleString(),
  },
];

export const DeleteOne: Story = {
  decorators: [
    (Accordion, context) => {
      const [data, setData] = useState(exampleData);
      const [key, setKey] = useState(0);
      const [openIds, setOpenIds] = useState<string[]>([]);

      useEffect(() => setData(exampleData), [key]);

      const selectAccordion = (prev: string[], id: string) => {
        if (prev.includes(id)) return [...prev].filter((i) => i !== id);
        return [...prev, id];
      };

      const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
        const id = (e.currentTarget as HTMLDivElement).id;
        setOpenIds((prev) => selectAccordion(prev, id));
      };

      const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
        const id = (e.currentTarget as HTMLInputElement).dataset.id;
        setData((prev) =>
          [...prev].filter((item) => item.id.toString() !== id)
        );
      };

      const onRefresh = () => {
        setKey((prev) => prev + 1);
        setOpenIds([]);
      };

      return (
        <>
          <ButtonGroup mb="mb-sm" spacing="tight">
            <IconButton
              color="success"
              icon={[faRefresh]}
              onClick={onRefresh}
            />
          </ButtonGroup>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {data.map(({ content, date, id, title }) => (
              <Accordion
                key={id}
                args={{
                  ...context.args,
                  id: id.toString(),
                  open: openIds.includes(id.toString()),
                  onClick: handleOpen,
                  children: (
                    <>
                      <AccordionHeader p="p-sm">
                        <AccordionInfo title={title} text={date} />
                        <AccordionIcon />
                        <AccordionActions onDelete={onDelete} />
                      </AccordionHeader>
                      <AccordionContent p="p-sm">{content}</AccordionContent>
                    </>
                  ),
                }}
              />
            ))}
          </div>
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
      const [data, setData] = useState(exampleData);
      const [key, setKey] = useState(0);
      const [openIds, setOpenIds] = useState<string[]>([]);
      const [deleteIds, setDeleteIds] = useState<string[]>([]);

      useEffect(() => setData(exampleData), [key]);

      const selectAccordion = (prev: string[], id: string) => {
        if (prev.includes(id)) return [...prev].filter((i) => i !== id);
        return [...prev, id];
      };

      const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
        const id = (e.target as HTMLInputElement).dataset.id;
        if (!id) return;
        setDeleteIds((prev) => selectAccordion(prev, id));
      };

      const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
        const id = (e.currentTarget as HTMLDivElement).id;
        setOpenIds((prev) => selectAccordion(prev, id));
      };

      const onDelete = () => {
        setData((prev) =>
          [...prev].filter((i) => !deleteIds.includes(i.id.toString()))
        );
      };

      const onRefresh = () => {
        setKey((prev) => prev + 1);
        setDeleteIds([]);
        setOpenIds([]);
      };

      return (
        <>
          <ButtonGroup mb="mb-sm" spacing="tight">
            <Button
              color="negative"
              label="Delete"
              variant="outlined"
              onClick={onDelete}
            />
            <IconButton
              color="success"
              icon={[faRefresh]}
              onClick={onRefresh}
            />
          </ButtonGroup>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {data.map(({ content, date, id, title }) => (
              <Accordion
                key={id}
                args={{
                  ...context.args,
                  id: id.toString(),
                  open: openIds.includes(id.toString()),
                  onClick: handleOpen,
                  children: (
                    <>
                      <AccordionHeader p="p-sm">
                        <AccordionInfo title={title} text={date} />
                        <AccordionIcon />
                        <AccordionSelect onSelect={handleDelete} />
                      </AccordionHeader>
                      <AccordionContent p="p-sm">{content}</AccordionContent>
                    </>
                  ),
                }}
              />
            ))}
          </div>
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
