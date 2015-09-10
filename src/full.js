import OOPmobile from './OOPmobile';
export default class full extends OOPmobile {

  constructor (model, color, sunRoof, transmission, gas) {
    super(model, color, 'standard', 4, 'average', 6, 5, sunRoof, 'average', transmission, gas);
  }
}

// model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas