import { SimpleTable } from './examples';
import { Container, Header } from './app-ui';
import './stories/main.css';

const App = () => {
  return (
    <Container padding="padding-xs">
      <Header />
      <SimpleTable />
    </Container>
  );
};

export default App;
