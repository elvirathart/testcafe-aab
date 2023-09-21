import { Selector, t } from 'testcafe';

class logoutPage {
    constructor () {
        this.userSection = Selector('section#user')
        this.Signout = Selector('div#logout')
    }
    async logout() {
        await t
        .click(this.userSection)
        .click(this.Signout)
    }
}

export default new logoutPage();
