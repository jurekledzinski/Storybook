import { Container, Header } from './app-ui';
import './stories/styles/main.css';

const App = () => {
  return (
    <Container style={{ minHeight: '200vh' }} padding="padding-xs">
      <Header />
    </Container>
  );
};

export default App;
