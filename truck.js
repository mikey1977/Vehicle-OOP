import OOPmobile from './OOPmobile';
export default class truck extends OOPmobile {
  constructor (model, color, sunRoof, transmission, gas) {
    super(model, color, 'large', 2, 'bed', 8, 2, sunRoof, 'large', transmission, gas);
  }
}
// model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas
//allow choice of model, color, sun roof, transmission, and gas
//set wheels to large, doors to 2, trunk size to bed, 8 cyl, 2 seater, and large tank