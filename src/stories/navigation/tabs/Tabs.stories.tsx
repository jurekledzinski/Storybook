import { Meta, StoryObj } from '@storybook/react-vite';
import { Tab, TabsList, TabsPanel } from './components';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/navigation/Tabs',
  args: {
    color: 'info',
    defaultSelectedKey: 'fruits',
    size: 'size-xs',
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'negative', 'secondary', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['size-xs', 'size-xxs', 'size-sm', 'size-md', 'size-lg'],
    },
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab id="fruits" label="Fruits" />
        <Tab id="vegetables" label="Vegetables" />
        <Tab id="grains" label="Grains" />
        <Tab id="dairy" label="Dairy" />
      </TabsList>
      <TabsPanel id="fruits">Fruits</TabsPanel>
      <TabsPanel id="vegetables">Vegetables</TabsPanel>
      <TabsPanel id="grains">Grains</TabsPanel>
      <TabsPanel id="dairy">Dairy</TabsPanel>
    </Tabs>
  ),
  parameters: { controls: { exclude: ['defaultSelectedKey', 'selectedKey', 'onSelectChange'] } },
};

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab id="fruits" label="Fruits" />
        <Tab id="vegetables" label="Vegetables" />
        <Tab id="grains" label="Grains" />
        <Tab id="dairy" label="Dairy" />
      </TabsList>
      <TabsPanel id="fruits">Fruits</TabsPanel>
      <TabsPanel id="vegetables">Vegetables</TabsPanel>
      <TabsPanel id="grains">Grains</TabsPanel>
      <TabsPanel id="dairy">Dairy</TabsPanel>
    </Tabs>
  ),
  parameters: { controls: { disable: true } },
};
