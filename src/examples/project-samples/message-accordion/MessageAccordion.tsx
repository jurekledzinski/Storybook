import { Box } from '@src/stories/layout';
import { Heading } from '@src/stories/typography';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from '@src/stories/display';

const ordersSelectOne = [
  { name: 'house', id: 'hello5', title: 'Select one hello 5' },
  { name: 'house', id: 'hello6', title: 'Select one hello 6' },
  { name: 'house', id: 'hello7', title: 'Select one hello 7' },
  { name: 'house', id: 'hello8', title: 'Select one hello 8' },
];

const ordersSelectMany = [
  { name: 'message', id: 'hello1', title: 'Message 1' },
  { name: 'message', id: 'hello2', title: 'Message 2' },
  { name: 'message', id: 'hello3', title: 'Message 3' },
  { name: 'message', id: 'hello4', title: 'Message 4' },
];

export const MessageAccordion = () => {
  const [selectOne, setSelectOne] = useState('');
  const [selectMany, setSelectMany] = useState<string[]>([]);

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Heading level={4} mb="mb-sm">
        Open one
      </Heading>

      {ordersSelectOne.map((order) => (
        <Accordion
          key={order.id}
          color="secondary"
          variant="outlined"
          showCheckbox
        >
          <AccordionHeader
            id={order.id}
            checked={selectOne === order.id}
            title={`Order one title: ${order.title}`}
            onClick={(e) => {
              const id = (e.target as HTMLInputElement).id;
              setSelectOne((prev) => (prev === id ? '' : id));
            }}
            p={'p-sm'}
            onChangeDelete={(e) => {
              const id = e.target.id.replace('delete-', '');
              console.log('ID DELETE', id.length);
            }}
          />
          <AccordionContent active={selectOne === order.id} pt="pt-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            quis perspiciatis provident maxime tenetur, soluta exercitationem
            minima dolor assumenda unde doloremque commodi, quam corporis neque.
            expedita dolorum velit?
          </AccordionContent>
        </Accordion>
      ))}

      <Heading level={4} mb="mb-sm">
        Open many
      </Heading>

      {ordersSelectMany.map((order) => (
        <Accordion key={order.id} color="primary" variant="contained">
          <AccordionHeader
            p={'p-sm'}
            id={order.id}
            checked={selectMany.includes(order.id)}
            title={`Order many title: ${order.title}`}
            onClick={(e) => {
              const id = (e.target as HTMLInputElement).id;
              setSelectMany((prev) => {
                if (prev.includes(id)) return [...prev].filter((i) => i !== id);
                return [...prev, id];
              });
            }}
          />
          <AccordionContent active={selectMany.includes(order.id)} pt={'pt-sm'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            quis perspiciatis provident maxime tenetur, soluta exercitationem
            minima dolor assumenda unde doloremque commodi, quam corporis neque.
            expedita dolorum velit?
          </AccordionContent>
        </Accordion>
      ))}
    </Box>
  );
};
