var contentWrapper = document.getElementsByClassName("content-wrapper")[0];

var pictures = [];


var picture = document.getElementsByClassName("photo-wrapper")[0];

pictures.push(picture.getElementsByTagName("img")[0]);

/* ADD OR REMOVE PHOTOS IN FOLDER

All images names must respect format : "photo_x.jpg"

Change j to fit the number of photos in the images folder.

*/

for(var j=1 ; j <= 31 ; j++){
        var pic = picture.cloneNode(true);
        pic.getElementsByTagName("img")[0].src ="images/photo_" + j +".jpg";
        contentWrapper.appendChild(pic);
        pictures.push(pic.getElementsByTagName("img")[0]);
}




