const { $ } = require('@wdio/globals')
const Page = require('./page');

const platform = process.env.PLATFORM


class LoginPage extends Page {
   
    get title() {
        return $(`${driver.isAndroid ? '//android.widget.TextView[@text="Test App Login"]' : '(//XCUIElementTypeStaticText[@name="Test App Login"])[1]'}`);
    }
    get emailField() {
        return $(`${driver.isAndroid ? '//android.widget.EditText[@text="Email"]' : '//XCUIElementTypeTextField[@value="Email"]'}`);
    }

    get passwordField() {
        return $(`${driver.isAndroid ? '//android.widget.EditText[@text="Password"]' : '//XCUIElementTypeSecureTextField[@value="Password"]'}`);
    }

    get loginButton() {
        return $(`${driver.isAndroid ? '//android.view.ViewGroup[@content-desc="Login"]' : '//XCUIElementTypeOther[@name="Login"]'}`);
    }

    /**
     * Login to test app
     */
    async login (username, password) {
        await this.emailField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    /**
     * iOS login method as the behaviours of app is different in iOS
     * @param {*} username 
     * @param {*} password 
     */
    async iOSlogin (username, password) {

        await this.emailField.setValue(username);
        await driver.pause(2000);
        await this.passwordField.setValue(password);
        await driver.pause(2000);
        driver.hideKeyboard('pressKey', 'Return');
        await driver.pause(2000);
        await this.loginButton.click();
        await driver.pause(2000);
         
    }


}

module.exports = new LoginPage();
