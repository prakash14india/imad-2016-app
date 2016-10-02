console.log('Loaded!');

//Get Name Content change value
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
//Count code
var btnCounter = document.getElementById("counter");
var counter = 0;

btnCounter.onclick = function() {
    //Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}