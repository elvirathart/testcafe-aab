import { Selector, t } from "testcafe";
import { users } from "./data/users";

class loginPage {
  constructor() {
    this.loginInputUser = Selector("input#email");
    this.loginInputPassword = Selector("input#password");
    this.loginButton = Selector("input#login");
    this.headerText = Selector("h1");
    this.footerText = Selector("footer");
    this.userSection = Selector('section#user')
    this.Signout = Selector('div#logout')
  }
  async login(email, password) {
    await t
      .typeText(this.loginInputUser, email, { replace: true }) // bug, input fields should be cleared on login attempt
      .typeText(this.loginInputPassword, password, { replace: true })
      .click(this.loginButton);
  }
  async loginAdmin() {
    const admin = users.find((u) => u.email.includes("admin"));
    if (!admin) throw Error("admin not found");

    await this.login(admin.email, admin.password);
  }
  // assuming after login, the sign out button is accessable on all pages in the same way.
  async logout() {
      await t
      .click(this.userSection)
      .click(this.Signout)
  }
}

export default new loginPage();
