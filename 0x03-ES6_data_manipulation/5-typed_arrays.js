export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arr = new Int8Array(buffer);
  if (position < length) {
    arr[position] = value;
    return new DataView(buffer);
  }
  throw (new Error('Position outside range'));
}
