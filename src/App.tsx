import { Container, Header } from './app-ui';
import { Select, SelectList, SelectOption, SelectTrigger } from './stories/form-elements/select';
import { useState } from 'react';
import './stories/styles/main.css';

const App = () => {
  const [animals, setAnimals] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setAnimals((prev) => {
      if (prev.includes(value)) return prev.filter((i) => i !== value);
      else return [...prev, value];
    });
  };

  return (
    <Container padding="padding-xs">
      <Header />
      <Select multiple value={animals} onChange={handleSelect}>
        <SelectTrigger size="size-xs" variant="basic" />
        <SelectList>
          <SelectOption value="dog">Hello 1</SelectOption>
          <SelectOption value="cat">Hello 1</SelectOption>
          <SelectOption value="monkey">Hello 1</SelectOption>
          <SelectOption value="horse">Hello 1</SelectOption>
        </SelectList>
      </Select>
    </Container>
  );
};

export default App;
