import loginPage from "./login_page";
import indexPage from "./index_page";
import { pathPrefix } from "./util";

fixture`Test - Index - text`
  .page`file://${process.cwd()}${pathPrefix}/testautomation-web/index.html`;

test("Assert content text", async (t) => {
  await loginPage.loginAdmin();

  const text = await indexPage.contentText.innerText;
  await t.expect(text).eql(
    // test dependent whether /Lorem ipsum/ or full text
    "Lorem ipsum egestas posuere vivamus neque facilisis augue cursus litora rhoncus aenean aptent eu quis, odio scelerisque curabitur rhoncus sociosqu velit curae ipsum duis porttitor rhoncus amet. consectetur nostra massa molestie sed imperdiet nulla mauris in cras mauris lobortis feugiat, quis sem sagittis tortor diam vehicula habitant primis ultricies platea et. amet aliquet nisi proin volutpat sapien eget, tincidunt nisl neque habitant tellus, mi commodo congue habitasse est. etiam imperdiet quisque sociosqu vivamus ut libero nibh fames, nullam eleifend adipiscing iaculis faucibus nulla dolor varius, curae sollicitudin habitant aliquet nam quis neque.\n\nTempus ultrices euismod eros libero posuere aliquam dui dictum hac integer, orci pretium aptent pellentesque aenean conubia vulputate orci rutrum neque phasellus, netus risus tellus nullam aenean tristique tempor donec nisl. habitant purus et luctus faucibus at pretium integer feugiat, felis pulvinar ut accumsan quisque fermentum non, curabitur purus egestas eu lobortis posuere feugiat. velit enim ultricies sollicitudin scelerisque sit vivamus nisi, tortor massa neque pretium cursus curabitur nullam dapibus, sem tristique elit adipiscing curabitur consequat. elit mi sagittis elit ad sociosqu erat vitae etiam curabitur platea, tincidunt pellentesque euismod quis feugiat sagittis vehicula rutrum inceptos, sociosqu donec imperdiet aenean eleifend auctor mauris arcu vestibulum.\n\nMauris aptent nunc per sociosqu placerat nisi sociosqu accumsan fermentum, habitant lacus massa metus cras malesuada rhoncus ut, imperdiet et taciti malesuada mollis tincidunt etiam quis. est non laoreet dictum senectus fames velit nulla mi, nam ipsum scelerisque sodales tellus ligula enim leo proin, lectus sodales platea feugiat condimentum donec orci. nisi potenti cras curae sollicitudin fames semper at morbi magna aenean donec, sodales cursus justo phasellus consequat congue luctus leo proin. sagittis dapibus viverra maecenas porta gravida, fermentum quisque donec porttitor, sit posuere ullamcorper lacinia. ac odio et nulla nisi potenti aliquet tristique, ac netus accumsan quis tortor non arcu cubilia, ante nec varius pretium justo donec.",
    "Index content text is not equal"
  );
});

const navigation = [
  { type: 'Home', nav: indexPage.navHome },
  { type: 'Products', nav: indexPage.navProducts },
  { type: 'Contact', nav: indexPage.navContact },
];

fixture `Test - Index - navigation headers`
  .page`file://${process.cwd()}${pathPrefix}/testautomation-web/index.html`
  .beforeEach(async t => {
    await loginPage.loginAdmin();
  });

  for (const link of navigation) {
  test(`Assert ${link.type} in navigation header`, async t => {
    const isLinkVisible = item.nav.exists;
    await t.expect(isLinkVisible).ok(`'${link.type}' is not found in the nav header`);
  });
};
