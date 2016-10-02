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

btnCounter.onclick = function() {
    //Create request to the counter endpoint
    var req = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    req.onreadystatechange = function() {
        if (req.readyState === XMLHttpRequest.DONE) {
            //Take same action
            if (req.status === 200) {
                var counter = req.responseText;
                //Render the variable in the correct span
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    }
    
    //Make the request
    req.open('GET', 'http://prakash14india.imad.hasura-app.io/counter', true);
    req.send(null);
    
}