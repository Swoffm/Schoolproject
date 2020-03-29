// start with intial var to be used for the for loop set equal to zero
//zero sets for the first image
var i = 0;


// intial to an empty array to be set full  of images
var images = [];
// this set the time for each slides roation
var time = 2500;
// this is filling the array images to and actual image files
images[0] = 'image_1.jpg';
images[1] = 'image_2.jpg';
images[2] = 'image_3.jpg';

function slideShow() {
    var slides = document.getElementsByClassName('slides');
    slides.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    window.setTimeout("slideShow()", time);
}

window.onload = slideShow;



