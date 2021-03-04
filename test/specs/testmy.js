const mainPage = require('../pageobjects/main.page');

describe('webdriver.io page', () => {
	it('should open the "GitHub" page', () => {
		browser.url(mainPage.pageUrl);
	});
	
	it('should find the "Automation" button', () => {
		mainPage.automateButton.scrollIntoView();
	});
	
	it('should click the "Automation" button', () => {
		mainPage.automateButton.click();
		browser.pause(1000);
	});
	
	it('should check the "Automation" page is displayed', () => {
		mainPage.automateTitel.isDisplayed;
		browser.pause(1000);
	});
});