const { expect } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page')
const GamePage = require('../pageobjects/game.page')
const LogoutPage = require('../pageobjects/logout.page')

const args = require('yargs').argv;
const platform = args.platform || 'android';


/**
 * Tests to verify Login and Logout of the app
 */

describe('WordGame App Login and Logout Tests', () => {
    it('should login with valid credentials', async () => {

        const username = Math.random().toString(36).substring(2, 10);
        const password = Math.random().toString(36).substring(2, 10);

       
        await driver.pause(5000);
        const actualTitle = await LoginPage.title.getText();
        expect(actualTitle).toEqual('Test App Login');  

        if (platform === "ios")
            await LoginPage.iOSlogin(username, password);
        else
            await LoginPage.login(username, password);

        await driver.pause(2000);
        // Verify GamePage Screen
        await expect(await GamePage.title).toBeDisplayed();
        const gameTitle = await GamePage.title.getText();
        expect(gameTitle).toEqual('Word Game'); 


    })
    it('should logout successfully', async () => {
       
        await GamePage.settingsTabTap();
        await driver.pause(2000);
        // Verify Settings Screen
        await expect(await LogoutPage.title).toBeDisplayed();
        const logoutTitle = await LogoutPage.title.getText();
        expect(logoutTitle).toEqual('Settings');  
        await LogoutPage.logout();
        const actualTitle = await LoginPage.title.getText();
        expect(actualTitle).toEqual('Test App Login');  
    })
})

