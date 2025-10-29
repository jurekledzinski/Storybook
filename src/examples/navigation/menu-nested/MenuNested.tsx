import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@src/stories/graphics/icon';
import {
  Menu,
  MenuContainer,
  MenuItem,
  MenuPanel,
  MenuTrigger,
} from '@src/stories/navigation/menu';

export const MenuNested = () => {
  return (
    <MenuContainer
      onSelectItem={(id) => console.log('Menu select item id', id)}
    >
      <MenuTrigger id="root" style={{ marginLeft: 250 }}>
        <Icon icon={faBars} />
      </MenuTrigger>

      <MenuPanel
        id="root"
        placement="bottom"
        type="floating"
        arrowPlacement="top"
        arrowSize="size-xs"
      >
        <Menu>
          <MenuItem id="about">Hello item 1</MenuItem>
          <MenuItem id="shop">Hello Menu item 2</MenuItem>
          <MenuItem id="ceramic">Hello Menu item 3</MenuItem>
          <MenuItem id="laundry">Hello Menu item 4</MenuItem>
          <MenuItem id="health">Hello Menu item 5</MenuItem>
          <MenuItem id="articles">Hello Menu item 6</MenuItem>
          <MenuItem id="contact">Hello Menu item 7</MenuItem>
        </Menu>
      </MenuPanel>
    </MenuContainer>
  );
};
