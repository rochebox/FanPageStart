// this is my javascript file

//alert("Hi its friday!!!");



function hidePhotos() {

	// when you  add pictures change the number
	var numOfPhotos = 13;

	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}
}


hidePhotos();