import OOPmobile from './OOPmobile';
export default class bus extends OOPmobile {
  constructor (model, color, sunRoof, transmission, gas, booster) {
    super(model, color, 'large', 2, 'huge', 8, 20, sunRoof, 'large', transmission, gas);
    if(booster && booster.boosterType){
      var booster = new nitrous(opts.boosterType);
    } else {
      var booster = new nitrous;

    }
    var booster = new nitrous();
}
}