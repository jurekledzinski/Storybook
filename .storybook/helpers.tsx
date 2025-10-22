import * as React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/addon-docs/blocks';

type SectionName =
  | 'Title'
  | 'Subtitle'
  | 'Description'
  | 'Primary'
  | 'Controls'
  | 'Stories';

const documentSections: { name: SectionName; component: React.ReactNode }[] = [
  { name: 'Title', component: <Title /> },
  { name: 'Subtitle', component: <Subtitle /> },
  { name: 'Description', component: <Description /> },
  { name: 'Primary', component: <Primary /> },
  { name: 'Controls', component: <Controls /> },
  { name: 'Stories', component: <Stories /> },
];

type CreateDocsProps = {
  skipSection?: SectionName[];
};

export const CreateDocs = ({ skipSection = [] }: CreateDocsProps) => (
  <>
    {documentSections
      .filter(({ name }) => !skipSection.includes(name))
      .map(({ name, component }) => (
        <React.Fragment key={name}>{component}</React.Fragment>
      ))}
  </>
);
