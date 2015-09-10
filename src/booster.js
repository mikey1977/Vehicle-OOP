import bus from './bus';
export default class booster extends bus {
  constructor(jetPropulsion, boosterType){
    this._jetPropulsion = jetPropulsion;
    this._boosterType = boosterType;
  }
}