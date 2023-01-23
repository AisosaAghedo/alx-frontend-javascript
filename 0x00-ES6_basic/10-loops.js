export default function appendToEachArrayValue(array, appendString) {
	let arrays = [];
	for (let idx of array) {
		arrays.push(`${appendString}${idx}`);
  }

  return arrays;
}
