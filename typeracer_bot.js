var spans = document.getElementsByTagName("span");
var good = new Array();

for (var i = 0; i < spans.length; i++) {
	if(spans[i].className == "lblUsername") {
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
console.log(txts[0]);
txts[0].value = good[1].innerHTML + "" + good[2].innerHTML + "" + good[3].innerHTML;
