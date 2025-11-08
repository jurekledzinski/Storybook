import { Button } from '@src/stories/buttons';
import { Menu, MenuItem, MenuTrigger } from './components';
import { Meta, StoryObj } from '@storybook/react-vite';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof MenuTrigger> = {
  component: MenuTrigger,
  title: 'Components/Navigation/Menu',
};
export default meta;

type Story = StoryObj<typeof MenuTrigger>;

export const Default: Story = {
  render: () => (
    <MenuTrigger>
      <Button label="Menu" iconEnd={[faBars]} />
      <Menu size="size-sm">
        <MenuItem id="home">Home</MenuItem>
        <MenuItem id="about">About</MenuItem>
        <MenuItem id="services">Services</MenuItem>
        <MenuItem id="contact">Contact</MenuItem>
      </Menu>
    </MenuTrigger>
  ),
  parameters: { controls: { disable: true } },
};
