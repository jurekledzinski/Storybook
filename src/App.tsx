import { Container, Header } from './app-ui';
import { MenuNested } from './examples';

import './stories/main.css';

const App = () => {
  return (
    <Container padding="padding-xs">
      <Header />
      <MenuNested />
    </Container>
  );
};

export default App;
