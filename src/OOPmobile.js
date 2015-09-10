export default class OOPmobile {

constructor(model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas) {
  this._model = model;
  this._color = color;
  this._wheelSize = wheelSize;
  this._doors = doors;
  this._trunkSize = trunkSize;
  this._engineCyl = engineCyl;
  this._seating = seating;
  this._sunRoof = sunRoof;
  this._brakes = true;
  this._gasTankSize = gasTankSize;
  this._transmission = transmission;
  this._gas = gas;
}
get model () {
  return this._model;
}
set model (model) {
  this._model = model;
}

get color () {
  return this._color;
}
set model (model) {
  this._color = color;
}

get wheelSize () {
  return this._wheelSize;
}
set wheelSize (wheelSize) {
  this._wheelSize = wheelSize;
}

get doors () {
  return this._doors;
}
set doors (doors) {
  this._doors = doors;
}

get trunkSize () {
  return this._trunkSize;
}
set trunkSize (trunkSize) {
  this._trunkSize = trunkSize;
}

get engineCyl () {
  return this._engineCyl;
}
set engineCyl (engineCyl) {
  this._engineCyl = engineCyl;
}

get seating () {
  return this._seating;
}
set seating (seating) {
  this._seating = seating;
}

get sunRoof() {
  return this._sunRoof;
}
set sunRoof (sunRoof) {
  this._sunRoof = sunRoof;
}

get brakes () {
  return this._brakes;
}

get gasTankSize () {
  return this._gasTankSize;
}
set gasTankSize (gasTankSize) {
  this._gasTankSize = gasTankSize;
}

get transmission () {
  return this._transmission;
}
set transmission (transmission) {
  this._transmission = transmission;
}

get gas () {
  return this._gas;
}

set gas (gas) {
  this._gas = gas;
}
}