class MainPage {
	
	get pageUrl(){
		return 'https://github.com/'
	}
	
	get automateButton(){
		return $('a[href="#home-automate"]');
	}
	
	get automateTitel(){
		return $('//h2[contains(text(), "Automate anything")]');
	}
	
}

module.exports = new MainPage();
