import OOPmobile from './OOPmobile';
export default class semi extends OOPmobile {
  constructor(model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof) {
    super(model, color, 'large', 2, false, 12, 2, sunRoof, 'large', 'manual', 'diesel');
  }
}
// model, color, wheelSize, doors, trunkSize, engineCyl, seating, sunRoof, gasTankSize, transmission, gas
//set wheels to large, 2 door, no trunk, 12 cyl, 2 seats, large gas tank, manual trans, and diesel fuel