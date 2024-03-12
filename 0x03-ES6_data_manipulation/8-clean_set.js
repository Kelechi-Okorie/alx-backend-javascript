export default function cleanSet(set, startString) {
  let str = '';
  let count = 0;

  if (!startString) {
    return str;
  }

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      str = str.concat(count === 0 ? '' : '-', element.slice(startString.length, element.length));
    }
    count += 1;
  });

  return str;
}
