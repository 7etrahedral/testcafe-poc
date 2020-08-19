import { Selector } from 'testcafe';

export default class loginPage {
  constructor() {
    this.loginButton = Selector('.ts-button-login')
  }
}