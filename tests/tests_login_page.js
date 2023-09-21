import loginPage from "./login_page";
import indexPage from "./index_page";
import logoutPage from "./logout_page";
import { users } from './data/users'

fixture`Test automation - login`
  .page`file://${process.cwd()}/testautomation-web/index.html`;

for (const user of users) {
  test(`Login and Sign Out test user ${user.email}`, async (t) => {
    await loginPage.login(user.email, user.password);

    const navHeaderExists = indexPage.navHeader.exists;
    await t
      .expect(navHeaderExists)
      .ok(`Navigating to the index page failed with user ${user.email}`);

    await logoutPage.logout();
  });
}

fixture`Test automation - login page misc`
  .page`file://${process.cwd()}/testautomation-web/index.html`;

test("Assert header text", async (t) => {
  await loginPage.loginAdmin();
  const text = await loginPage.headerText.innerText;
  await t
    .expect(text)
    .eql(
      "Automation doesn't stop at testing, it's just a beginning!",
      "Header text is not equal"
    );
});

test("Assert footer text", async (t) => {
  await loginPage.loginAdmin();
  const text = await loginPage.footerText.innerText;
  await t
    .expect(text)
    .eql("Thank you for participating!", "Footer text is not equal");
});
