var mainpage=require("./pages/mainPage");
var wordpage=require("./pages/wordPage");

describe("the control of the accuracy of the example sentences given for keywords on dictionary.cambridge.org", function() {
	browser.ignoreSynchronization = true;
	var keyword="diversity";

	it("accessing to the mainpage of the site", function() {
		mainpage.goToTheDictionary();
	});
	it("User selects english language from the menu", function (){
		mainpage.selectEnglishLanguage();
	});
	it("User types an english vocabulary in the search box", function() {
		mainpage.typeTheTargetWord(keyword);
	});
	it("User Clicks the search button", function() {
		mainpage.search();
	});
	it("User checks wheter the example sentences contain the target word", function() {
		wordpage.checkWordInTheExamples(keyword);
	});
});