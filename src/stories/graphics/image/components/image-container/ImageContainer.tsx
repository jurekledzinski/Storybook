import { getClassNamesImage } from '../utils';
import { ImageContainerProps } from './types';
import { useState } from 'react';

export const ImageContainer = ({
  children,
  loader,
  ...props
}: ImageContainerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const classNames = getClassNamesImage(isLoading, loader);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return (
    <div {...props} className={classNames}>
      {children ? children({ isError, isLoading, onLoad, onError }) : null}
    </div>
  );
};

// export const Example = () => {
//   return (
//     <ImageContainer loader="loader">
//       {({ onLoad, onError, isLoading, isError }) => (
//         <>
//           {isLoading && <Loader position="element" />}
//           {isError && (
//             <Alert
//               color="negative"
//               icon={faTriangleExclamation}
//               message="Failed to load image"
//               fullWidth
//               size="size-xs"
//             />
//           )}
//           <Image
//             src="https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg"
//             onLoad={onLoad}
//             onError={onError}
//           />
//         </>
//       )}
//     </ImageContainer>
//   );
// };

//   aspect-ratio: 1 / 1;
// export const Example = () => {
//   return (
//     <ImageContainer loader="skeleton" style={{ aspectRatio: '1/1' }}>
//       {({ onLoad, onError, isError, isLoading }) => (
//         <>
//           {isError && !isLoading ? (
//             <Alert
//               color="negative"
//               icon={faTriangleExclamation}
//               message="Failed to load image"
//               fullWidth
//               size="size-xs"
//             />
//           ) : (
//             <Image
//               src="https://cdn.pixabay.com/photo/2025/06/10/11/21/view-9651981_1280.jpg"
//               onLoad={onLoad}
//               onError={onError}
//             />
//           )}
//         </>
//       )}
//     </ImageContainer>
//   );
// };
