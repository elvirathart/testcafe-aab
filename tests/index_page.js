import { Selector, t } from 'testcafe';

class indexPage {
    constructor () {
        this.navHeader = Selector('nav#navigation')
        this.contentText = Selector('div.div-container')

        this.navHome = Selector('div.home')
        this.navProducts = Selector('div.products')
        this.navContact = Selector('div.contact')
    }
}

export default new indexPage();
