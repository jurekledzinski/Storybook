export const downloadTxt = (colors: Record<string, object>) => {
  const text = JSON.stringify(colors, null, 2);
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ColorsScales.txt';
  a.click();
};
