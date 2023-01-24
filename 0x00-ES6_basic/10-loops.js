export default function appendToEachArrayValue(array, appendString) {
  const arrays = [];
  for (const idx of array) {
    arrays.push(`${appendString}${idx}`);
  }

  return arrays;
}
