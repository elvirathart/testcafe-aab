import loginPage from "./login_page";
import indexPage from "./index_page";
import logoutPage from "./logout_page";
import { users } from './data/users'
import { pathPrefix } from "./util";

fixture`Test - Login - users`
  .page`file://${process.cwd()}${pathPrefix}/testautomation-web/index.html`;

for (const user of users) {
  test(`Login and Sign Out user ${user.email}`, async (t) => {
    await loginPage.login(user.email, user.password);

    const navHeaderExists = indexPage.navHeader.exists;
    await t
      .expect(navHeaderExists)
      .ok(`${user.email} failed to log in`);

    await logoutPage.logout();
  });
}

fixture `Test - Login - text`
  .page`file://${process.cwd()}${pathPrefix}/testautomation-web/index.html`
  .beforeEach(async t => {
    await loginPage.loginAdmin();
  });

test("Assert header text", async (t) => {
  const text = await loginPage.headerText.innerText;
  await t
    .expect(text)
    .eql(
      "Automation doesn't stop at testing, it's just a beginning!",
      "Header text is not equal"
    );
});

test("Assert footer text", async (t) => {
  const text = await loginPage.footerText.innerText;
  await t
    .expect(text)
    .eql("Thank you for participating!", "Footer text is not equal");
});
