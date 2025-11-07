import { Container, Header } from './app-ui';
import { Button, Menu, MenuItem, MenuTrigger } from './stories';
import './stories/styles/main.css';

const App = () => {
  return (
    <Container style={{ minHeight: '200vh' }} padding="padding-xs">
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MenuTrigger>
          <Button label="Services" />
          <Menu>
            <MenuItem>Ser</MenuItem>
            <MenuItem>Ser</MenuItem>
            <MenuItem>Ser</MenuItem>
            <MenuItem>Ser</MenuItem>
          </Menu>
        </MenuTrigger>
      </div>
    </Container>
  );
};

export default App;
