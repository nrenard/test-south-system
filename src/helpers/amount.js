export default (valueToFormat, currencyPrefix = 'R$') => {
  const valueString = valueToFormat.toString();

  let valueFormatted = 0;

  if (valueString.length > 4) {
    valueFormatted = valueString.replace('.', ',');
  } else if (valueString.length === 4) {
    valueFormatted = valueString.replace('.', ',');
    valueFormatted = `${valueFormatted}0`;
  } else {
    valueFormatted = `${valueString},00`;
  }

  return `${currencyPrefix} ${valueFormatted}`;
};
