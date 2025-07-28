import { ColumnsFilterTablePagination } from './examples';
import { Container, Header } from './app-ui';
import './stories/main.css';

const App = () => {
  return (
    <Container padding="padding-xs">
      <Header />
      <ColumnsFilterTablePagination />
    </Container>
  );
};

export default App;
