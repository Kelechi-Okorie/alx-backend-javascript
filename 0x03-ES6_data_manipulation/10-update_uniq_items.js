export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  return map.forEach((value, key, newMap) => {
    if (value === 1) {
      newMap.set(key, 100);
    }
  });
}
