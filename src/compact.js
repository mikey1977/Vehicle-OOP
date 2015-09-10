import OOPmobile from './OOPmobile';
export default class compact extends OOPmobile {

  constructor(model, color, doors, seating, sunRoof, transmission, gas) {
    super(model, color, 'standard', doors, 'small', 4, seating, sunRoof, 'small', transmission, gas);
  }
}
