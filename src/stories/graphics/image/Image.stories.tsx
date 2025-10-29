import { Alert, AlertIcon, AlertMessage } from '@src/stories/feedbacks/alert';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Image } from './Image';
import { ImageContainer } from './components';
import { ImageProps } from './types';
import { Loader } from '@src/stories/feedbacks/loader';
import { Meta, StoryObj } from '@storybook/react-vite';

type ImageTypeProps = ImageProps & { isLoading?: boolean; isError?: boolean };

const meta: Meta<ImageTypeProps> = {
  component: Image,
  title: 'Components/Graphics/Image',
  args: {
    src: '/images/Desert.jpg',
    alt: 'Desert',
  },
  argTypes: {
    src: {
      control: 'select',
      options: ['Beach', 'Desert'],
      mapping: {
        Beach: '/images/Beach.jpg',
        Desert: '/images/Desert.jpg',
      },
    },
  },
};
export default meta;

type Story = StoryObj<ImageTypeProps>;

export const Playground: Story = {
  parameters: {
    controls: { include: ['src'] },
  },
};

export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
};

export const LoaderImage: Story = {
  args: {
    isLoading: false,
    isError: false,
  },
  argTypes: {
    isError: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
  render: (args) => (
    <ImageContainer loader="loader" style={{ aspectRatio: '1/1' }}>
      {({ onLoad, onError, isLoading, isError }) => {
        const simulatedError = args.isError || isError;
        const simulatedLoading = args.isLoading || isLoading;

        return (
          <>
            {simulatedLoading && <Loader position="element" />}
            {simulatedError && !simulatedLoading ? (
              <Alert
                color="negative"
                fullWidth
                orientation="column"
                variant="light"
              >
                <AlertIcon icon={faTriangleExclamation} size="size-sm" />
                <AlertMessage message="Failed to load image" />
              </Alert>
            ) : (
              <Image
                src={
                  args.isLoading
                    ? undefined
                    : 'https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg'
                }
                onLoad={onLoad}
                onError={onError}
              />
            )}
          </>
        );
      }}
    </ImageContainer>
  ),
  parameters: {
    controls: { include: ['isError', 'isLoading'] },
  },
};

export const SkeletonLoadImage: Story = {
  args: {
    isLoading: false,
    isError: false,
  },
  argTypes: {
    isError: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
  render: (args) => (
    <ImageContainer
      className={args.isLoading ? 'skeleton' : ''}
      loader="skeleton"
      style={{ aspectRatio: '1/1' }}
    >
      {({ onLoad, onError, isError, isLoading }) => {
        const simulatedError = args.isError || isError;
        const simulatedLoading = args.isLoading || isLoading;

        return (
          <>
            {simulatedError && !simulatedLoading ? (
              <Alert
                color="negative"
                fullWidth
                orientation="column"
                variant="light"
              >
                <AlertIcon icon={faTriangleExclamation} size="size-sm" />
                <AlertMessage message="Failed to load image" />
              </Alert>
            ) : (
              <Image
                src={
                  args.isLoading
                    ? undefined
                    : 'https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg'
                }
                onLoad={onLoad}
                onError={onError}
              />
            )}
          </>
        );
      }}
    </ImageContainer>
  ),
  parameters: {
    controls: { include: ['isError', 'isLoading'] },
  },
};
