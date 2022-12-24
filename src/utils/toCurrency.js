export default toCurrency = (decimals, prefix, kdelim) => {
  decimals = typeof decimals === 'number' ? Math.min(decimals, 2) : 0;
  prefix = prefix || ''; // the currency prefix eg. '$'
  kdelim = kdelim || ','; // thousand delimininator eg. ','
  var value = this,
    valueAsInt = parseInt(value, 10),
    valueAsFixed = value.toFixed(decimals),
    stringValue = String(decimals === 0 ? valueAsInt : valueAsFixed);
  rex = new RegExp(kdelim + '$');

  return (
    prefix +
    stringValue
      .split('')
      .reverse()
      .join('')
      .replace(/(\d{3})/g, function (m, a) {
        return a + kdelim;
      })
      .replace(rex, '')
      .split('')
      .reverse()
      .join('')
  );
};
