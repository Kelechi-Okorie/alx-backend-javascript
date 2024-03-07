export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.errorMessage = 'Class extending Building must override evacuationWarningMessage';
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error(this.errorMessage);
  }
}
