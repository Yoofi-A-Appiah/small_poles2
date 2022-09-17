export default class ConfigStore {
  constructor() {
    this.splashTime = 1000;
    this.splashImg = require("../../images/Bun.png");
  }
  get SplashImg() {
    return this.splashImg;
  }
  get SplashTime() {
    return this.splashTime;
  }
}
