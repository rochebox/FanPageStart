// this is my javascript file

//alert("Hi its friday!!!");


var numOfPhotos = 13;
var currentPic = 0;


function hidePhotos() {

	// when you  add pictures change the number
	

	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}
}


function doRightClick(){

 	// Step1 -- Hide Current Photo
 	var photoID = "image" + currentPic;
 	document.getElementById(photoID).style.display = "none";
 	// Step2 --Go To next Photo
 	currentPic--;

 	if(currentPic < 0)
 	{
 		currentPic= numOfPhotos-1;
 	}
 	// Step 3 show new photo
 	photoID = "image" + currentPic;
 	document.getElementById(photoID).style.display = "block";
}

function doLeftClick(){
 	//alert("You clicked the Left Arrow");
 	// Step1 -- Hide Current Photo
 	var photoID = "image" + currentPic;
 	document.getElementById(photoID).style.display = "none";
 	// Step2 --Go To next Photo
 	currentPic++;
 	if(currentPic >= numOfPhotos)
 	{
 		currentPic=0;
 	}
 	// Step 3 show new photo
 	photoID = "image" + currentPic;
 	document.getElementById(photoID).style.display = "block";
}


hidePhotos();