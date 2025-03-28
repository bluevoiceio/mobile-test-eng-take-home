const { $ } = require('@wdio/globals')
const Page = require('./page');


class gamePage extends Page {
    
    get title() {
        return $(`${driver.isAndroid ? '(//android.widget.TextView[@text="Word Game"])[1]' : '(//XCUIElementTypeStaticText[@name="Word Game"])[4]'}`);
    }
    get wordGameTab() {
        return $(`${driver.isAndroid ? '(//android.widget.TextView[@text="Word Game"])[2]' : '//XCUIElementTypeButton[@name="Word Game, tab, 1 of 2"]'}`);
    }

    get settingsTab() {
        return $(`${driver.isAndroid ? '//android.widget.TextView[@text="Settings"]' : '//XCUIElementTypeButton[@name="Settings, tab, 2 of 2"]'}`);
    }

    // iOS popUp
    get savePasswordNotNow() {
        return $(`${driver.isAndroid ? '//android.widget.TextView[@text="Settings"]' : '/XCUIElementTypeButton[@name="Not Now"]'}`);
    }

    async wordGameTabTap () {
        await this.wordGameTab.click();
    }

    async notNowTap () {
        await this.savePasswordNotNow.click();
    }

    async settingsTabTap () {
        await this.settingsTab.click();
    }


}

module.exports = new gamePage();
