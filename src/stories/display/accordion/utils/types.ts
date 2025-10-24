import { AccordionContentProps, AccordionHeaderProps } from '../components';
import { AccordionProps } from '../types';

type OmitHeaderKeys = 'children' | 'onClick';
type CleanHeaderProps = Omit<AccordionHeaderProps, OmitHeaderKeys>;

type OmitAccordionKeys = 'children' | 'id' | 'open';

type HeaderParams = Omit<AccordionProps, OmitAccordionKeys> & CleanHeaderProps;
type ContentParams = Omit<AccordionContentProps, 'children'> & {
  open: boolean;
  variant: AccordionProps['variant'];
};

export type AccordionHeaderClassNames = (params: HeaderParams) => string;

export type AccordionContentClassNames = (params: ContentParams) => string;
