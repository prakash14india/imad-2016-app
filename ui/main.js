console.log('Loaded!');

//Get Name Content change value
var contentId = document.getElementById("Name");
contentId.innerHTML = "&#x2013; Prakash Venkatesan";

var imgMadi = document.getElementById("imgMadi");
var marginSize = 0;
var marginMoveLeft = true;

//Movement Image
function moveImg() {
	if (marginSize === 0) {
		marginMoveLeft =  true;
	}
	
	if (marginSize <=500  && marginMoveLeft === true) {
		marginSize = marginSize + 10;
		imgMadi.style.marginLeft = marginSize + 'px';
	} else {
		marginMoveLeft = false;
		marginSize = marginSize - 10;
		imgMadi.style.marginLeft = marginSize + 'px';
	}
}

imgMadi.onclick = function() {
	var interval = setInterval(moveImg, 50);
}