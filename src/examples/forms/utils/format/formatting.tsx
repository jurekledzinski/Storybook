export const formatNumber = (
  value: string,
  local: Intl.LocalesArgument,
  options: Intl.NumberFormatOptions
) => {
  const num = parseFloat(value);

  const format = new Intl.NumberFormat(local, options).format(num);

  return { format: value === '' ? '' : format, value };
};

// Example use
//   return new Intl.NumberFormat('pl-PL', {
//     style: 'currency',
//     currency: 'PLN',
//     maximumFractionDigits: 0,
//   }).format(num);

export const removeNonNumericValues  = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  obj: T,
  keys: K[]
) => {
  const newObj = { ...obj };

  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'string') {
      newObj[key] = value.replace(/[^\d]/g, '') as T[K];
    }
  }

  return newObj;
};

// removeNonNumericValues ({ a: '23.2323' }, ['a']);
