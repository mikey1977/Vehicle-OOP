import booster from './booster';
export default nitrous extends booster {
  constructor (boosterType = 'nitrous') {
    this._boosterType = boosterType;

    super(rocket, boosterType);
  }
}