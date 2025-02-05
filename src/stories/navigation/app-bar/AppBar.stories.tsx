import styles from './AppBar.module.css';
import { AppBar } from './AppBar';
import type { Meta, StoryObj } from '@storybook/react';
import { classNames } from '../../helpers/classNames';

const meta: Meta<typeof AppBar> = {
  args: {
    children: 'App bar',
  },
  component: AppBar,
  title: 'Components/Navigation/App bar',
};

export default meta;

type Story = StoryObj<typeof AppBar>;

export const Top: Story = {
  args: {
    children: 'Top',
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorVerticalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          placeat rerum quam dolorum est explicabo provident tempora et maiores
          assumenda atque, aperiam itaque? Ea, dolor asperiores, similique
          pariatur eligendi qui optio omnis animi ipsam quibusdam ut eius
          repellendus quam corrupti, consectetur accusantium. Maiores temporibus
          facere fugiat sequi illo veritatis error nesciunt explicabo ullam
          atque, provident deleniti omnis a? Dicta eius laboriosam earum est
          fugit modi possimus repudiandae impedit itaque voluptate, eligendi
          quam libero. Maxime reprehenderit hic accusamus. Quod numquam
          voluptates dolores ut voluptatibus maxime in, nulla rerum deleniti
          quo, quas, laudantium non blanditiis neque consectetur quasi! Dolore
          modi quos commodi!
        </div>
      </div>
    ),
  ],
};

export const Right: Story = {
  args: {
    children: 'Right',
    className: styles.headerRight,
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorHorizontalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          minus cum obcaecati eligendi laborum ipsam at harum alias error
          temporibus, praesentium accusamus laudantium maxime est laboriosam
          mollitia? Minima aut repellendus maxime, iusto exercitationem magni
          sint! Delectus, vel tenetur, nihil placeat numquam esse voluptates
          illum labore, maxime laboriosam commodi perferendis voluptate.
          Voluptate vero qui, incidunt consequatur eius omnis et a suscipit
          voluptatem iure cupiditate, accusamus odio inventore ad id reiciendis
          aspernatur tempore sunt quaerat non assumenda repudiandae ipsam esse
          quis. Natus labore maiores, perferendis ut ducimus eligendi nihil iure
          praesentium esse eos nisi explicabo veritatis fuga sequi itaque
          dignissimos dolorum consequatur.
        </div>
      </div>
    ),
  ],
};

export const Bottom: Story = {
  args: {
    children: 'Bottom',
    className: styles.headerBottom,
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorVerticalContainer
        )}
      >
        <Story />
        <div className={styles.decoratorContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime
          labore earum tempora porro corrupti molestias alias consequuntur
          dolores unde repudiandae, magni, laborum aliquam quas enim non, natus
          corporis sed ad quibusdam nemo! Unde voluptates dignissimos odit sint
          culpa, eius eaque, corporis debitis error labore illum ea earum sunt
          eveniet quis iusto recusandae? Possimus ipsum distinctio itaque.
          Quisquam eveniet harum molestiae, quidem magni error excepturi hic nam
          et distinctio, ratione unde cumque voluptas est eius! Fugit quo
          tenetur, porro sequi animi, quibusdam aperiam id voluptatibus debitis
          repudiandae, omnis molestiae. Asperiores commodi fugiat dolore unde
          sed mollitia dolorum quas tenetur totam.
        </div>
      </div>
    ),
  ],
};

export const Left: Story = {
  args: {
    children: 'Left',
    className: styles.headerLeft,
  },
  decorators: [
    (Story) => (
      <div
        className={classNames(
          styles.container,
          styles.decoratorHorizontalContainer
        )}
      >
        <Story />
        <div className={classNames(styles.container, styles.decoratorContent)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          blanditiis ipsa perspiciatis mollitia ducimus fugiat facere a
          voluptatum debitis animi, consequuntur nam quidem nobis ea accusantium
          tempore veritatis excepturi sunt modi veniam unde magni! Eligendi iste
          cum illum, animi temporibus at odio. Corrupti, temporibus facilis,
          nihil at repellendus illum obcaecati molestiae voluptate in numquam
          distinctio, a porro natus atque perspiciatis saepe earum. At autem
          culpa deleniti optio. Harum iste possimus eveniet illum veniam
          consequuntur dolorem nisi alias fugiat facere, aperiam soluta
          assumenda dolorum doloribus ea. Ab numquam aut libero voluptatum est
          quos deleniti, ducimus adipisci. Possimus saepe rerum minima tempore!
        </div>
      </div>
    ),
  ],
};
