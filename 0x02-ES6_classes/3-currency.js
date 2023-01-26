export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newC) {
    this._code = newC;
  }

  get name() {
    return this._name;
  }

  set name(newN) {
    this._name = newN;
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
