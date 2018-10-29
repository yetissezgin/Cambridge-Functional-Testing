var wordPage = function(){
	this.checkWordInTheExamples = function (word)
	{
		$$(".egs .eg").map(function(selectedpart) {
			selectedpart.$$("div").get(0).getText().then(function(text) {
				expect(text.toLowerCase()).toContain(word.toLowerCase());
			});
		});
	}
}
module.exports= new wordPage();