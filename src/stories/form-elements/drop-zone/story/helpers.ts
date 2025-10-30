export const selectFiles = (
  files: FileList,
  onSetFiles: (fileDetails: string) => void
) => {
  [...files].forEach((file, i) => {
    const fileDetails = `file[${i}].name = ${file.name} ${file.type} ${file.size}`;
    onSetFiles(fileDetails);
  });
};
