import OOPmobile from './OOPmobile';
export default class suv extends OOPmobile {
  constructor(model, color, sunRoof, transmission, gas) {
    super(model, color, 'large', 4, 'large', 6, 5, sunRoof, 'large', transmission, gas);
  }
}
// model, color, wheelSize, doors, trunkSize,
// engineCyl, seating, sunRoof, gasTankSize, transmission, gas