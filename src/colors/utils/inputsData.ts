const createBase = (amount: number, name: string) => {
  return Array.from({ length: amount })?.map((_, i) => name + (i + 1));
};

export const generateArgs = (amount: number, name: string) => {
  const base = createBase(amount, name);
  const args = base.map((key) => [key, 0]);

  return Object.fromEntries(args);
};

export const generateControls = (amount: number, name: string, max: number) => {
  const base = createBase(amount, name);
  const text = name.toLowerCase();

  const controls = Object.fromEntries(
    base?.map((key, i) => [
      key.toLowerCase(),
      {
        control: { min: 0, max, step: 1, type: 'range' },
        name: text === 'lightness' ? `${name} ${i === 0 ? '50' : `${i}00`}` : `${name} ${i + 1}`,
        table: { category: name },
        type: 'number',
      },
    ])
  );

  return controls;
};
