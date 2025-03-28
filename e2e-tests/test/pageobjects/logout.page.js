const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $(`${driver.isAndroid ? '(//android.widget.TextView[@text="Settings"])[1]' : '(//XCUIElementTypeStaticText[@name="Settings"])[4]'}`);
    }

    get logoutButton() {
        return $(`${driver.isAndroid ? '//android.view.ViewGroup[@content-desc="Logout"]' : '//XCUIElementTypeOther[@name="Logout"]'}`);
    }

    async logout () {
        await this.logoutButton.click();
    }

}

module.exports = new LogoutPage();
