import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Container, Header } from './app-ui';
import {
  Select,
  SelectList,
  SelectOption,
  SelectPanel,
  SelectTrigger,
} from './stories/form-elements/select';
import './stories/main.css';

const App = () => {
  return (
    <Container padding="padding-xs">
      <Header />
      <div style={{ marginTop: 400 }}></div>
      <Select>
        <SelectTrigger
          endIcon={[faChevronUp, faChevronDown]}
          placeholder="Select color"
        />
        <SelectPanel>
          <SelectList>
            <SelectOption id="red">Red</SelectOption>
            <SelectOption id="green">Green</SelectOption>
            <SelectOption id="orange">Orange</SelectOption>
            <SelectOption id="blue">Blue</SelectOption>
            <SelectOption id="yellow">Yellow</SelectOption>
            <SelectOption id="purple">Purple</SelectOption>
          </SelectList>
        </SelectPanel>
      </Select>
    </Container>
  );
};

export default App;
