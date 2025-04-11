export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

// export const generateClassNames = (
//   baseClass: string,
//   conditions: { [key: string]: boolean },
//   additionalClasses: string[] = []
// ) => {
//   let classNames = [baseClass];

//   Object.keys(conditions).forEach((key) => {
//     if (conditions[key]) {
//       classNames.push(`${baseClass}-${key}`);
//     }
//   });

//   classNames = [...classNames, ...additionalClasses];

//   return classNames.join(' ');
// };

export const generateClassNames = (
  styles: Record<string, string>,
  modifiers: Record<string, boolean>
) => {
  return Object.entries(modifiers)
    .filter((item) => item[1])
    .map(([key]) => styles[key])
    .filter(Boolean)
    .join(' ');
};
