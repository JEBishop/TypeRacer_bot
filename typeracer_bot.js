var spans = document.getElementsByTagName("span");
var good = new Array();
var wordsCount = 0

for (var i = 0; i < spans.length; i++) {
	if(spans[i].className == "lblUsername" && spans[i + 1].className != "lblUsername") {
		for (var i; i < spans.length; i++) {
			good.push(spans[i]);
			if(spans[i].className == "gwt-InlineLabel") {
				break;
			}
		}
	}
}

console.log(good[1].innerHTML + "" + good[2].innerHTML + "" + good[3].innerHTML);


var txts = document.getElementsByClassName("txtInput");
var fullString = good[1].innerHTML + "" + good[2].innerHTML + "" + good[3].innerHTML;
var words = fullString.split(" ");


txts[0].value = words[wordsCount];
txts[0].focus();
document.body.onkeyup = function(e) {
	if(e.keyCode == 32) {
		wordsCount = wordsCount + 1;
		txts[0].value = words[wordsCount];
		txts[0].focus();
		
		var evt = new KeyboardEvent('keyup', {'keyCode':32, 'which':32});
		setInterval(function() {
			document.dispatchEvent (evt);
		}, 100);
	}
}