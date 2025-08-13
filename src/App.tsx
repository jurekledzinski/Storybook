import { Container, Header } from './app-ui';

import './stories/main.css';
import {
  Menu,
  MenuContainer,
  MenuItem,
  MenuPanel,
  MenuTrigger,
} from './stories/navigation/menu';

const App = () => {
  return (
    <Container padding="padding-xs">
      <Header />
      <MenuContainer
        onSelectItem={(id) => console.log('Menu select item id', id)}
      >
        <MenuTrigger id="root" style={{ marginLeft: 50 }}>
          Open menu
        </MenuTrigger>

        <MenuPanel
          id="root"
          placement="bottom"
          type="floating"
          arrowPlacement="top"
        >
          <Menu>
            <MenuItem id="about">Hello item 1</MenuItem>
            <MenuItem id="shop">Hello Menu item 2</MenuItem>
            <MenuItem id="ceramic">Hello Menu item 3</MenuItem>
            <MenuItem id="laundry">Hello Menu item 4</MenuItem>

            <MenuTrigger id="cars" fullWidth>
              Cars
            </MenuTrigger>

            <MenuPanel
              id="cars"
              type="floating"
              placement="right"
              arrowPlacement="left"
            >
              <Menu>
                <MenuItem id="polonez">Hello Menu cars 1</MenuItem>

                <MenuTrigger id="movies" fullWidth>
                  Movies
                </MenuTrigger>

                <MenuPanel
                  id="movies"
                  type="floating"
                  placement="right"
                  arrowPlacement="left"
                >
                  <Menu>
                    <MenuItem id="movie-1">Hello Menu movies 1</MenuItem>
                    <MenuItem id="movie-2">Hello Menu movies 2</MenuItem>
                    <MenuItem id="movie-3">Hello Menu movies 3</MenuItem>

                    <MenuTrigger id="books" fullWidth>
                      Books
                    </MenuTrigger>

                    <MenuPanel
                      id="books"
                      type="floating"
                      placement="right"
                      arrowPlacement="left"
                    >
                      <Menu>
                        <MenuItem id="book-1">Hello Menu books 1</MenuItem>
                        <MenuItem id="book-2">Hello Menu books 2</MenuItem>
                        <MenuItem id="book-3">Hello Menu books 3</MenuItem>

                        <MenuTrigger id="houses" fullWidth>
                          Houses
                        </MenuTrigger>

                        <MenuPanel
                          id="houses"
                          type="floating"
                          placement="right"
                          arrowPlacement="left"
                        >
                          <Menu>
                            <MenuItem id="house-1">
                              Hello Menu houses 1
                            </MenuItem>
                            <MenuItem id="house-2">
                              Hello Menu houses 2
                            </MenuItem>
                            <MenuItem id="house-3">
                              Hello Menu houses 3
                            </MenuItem>
                            <MenuItem id="house-4">
                              Hello Menu houses 4
                            </MenuItem>
                            <MenuItem id="house-5">
                              Hello Menu houses 5
                            </MenuItem>
                            <MenuItem id="house-6">
                              Hello Menu houses 6
                            </MenuItem>
                            <MenuItem id="house-7">
                              Hello Menu houses 7
                            </MenuItem>
                            <MenuItem id="house-8">
                              Hello Menu houses 8
                            </MenuItem>
                          </Menu>
                        </MenuPanel>
                      </Menu>
                    </MenuPanel>
                  </Menu>
                </MenuPanel>

                <MenuItem id="fiat">Hello Menu cars 2</MenuItem>
                <MenuItem id="syrenka">Hello Menu cars 3</MenuItem>
              </Menu>
            </MenuPanel>

            <MenuItem id="health">Hello Menu item 5</MenuItem>
            <MenuItem id="articles">Hello Menu item 6</MenuItem>
            <MenuItem id="contact">Hello Menu item 7</MenuItem>
          </Menu>
        </MenuPanel>
      </MenuContainer>
    </Container>
  );
};

export default App;
