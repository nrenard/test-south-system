export default (valueToFormat, currencyPrefix = 'R$') => {
  const parsedValue = parseFloat(valueToFormat, 10);
  const valueString = parsedValue.toString().split('.') || parsedValue.toString();

  let valueFormatted;
  if (valueString.length > 2) {
    valueFormatted = valueString
      .replace(/\D/g, '')
      .replace(/(\d)(\d{8})$/, '$1.$2')
      .replace(/(\d)(\d{5})$/, '$1.$2')
      .replace(/(\d)(\d{2})$/, '$1,$2');
  } else if (valueString.length === 1) {
    valueFormatted = `0,0${valueString}`;
  } else {
    valueFormatted = `${valueString}`;
  }
  return `${currencyPrefix} ${valueFormatted}`;
};
