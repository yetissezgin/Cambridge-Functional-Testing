var mainPage=function(){
	this.goToTheDictionary = function() {
		browser.get("https://dictionary.cambridge.org/");
	}
	this.selectEnglishLanguage=function (){
		element(by.css("span[data-dictcode='english']")).click();
	}
	this.typeTheTargetWord = function(keyword){

		element(by.css("#cdo-search-input")).sendKeys(keyword);
	}
	this.search = function() {
		element(by.css(".cdo-search__button")).click();
	}
}
module.exports= new mainPage();