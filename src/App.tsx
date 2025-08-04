import { Container, Header } from './app-ui';
import { SimpleTable } from './examples/tables/custom';
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
