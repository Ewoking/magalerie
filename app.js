var contentWrapper = document.getElementsByClassName("content-wrapper")[0];

var slider = document.getElementsByClassName("slider-wrapper")[0];
slider.addEventListener("click", hideSlider);

var pictures = [];


var picture = document.getElementsByClassName("photo-wrapper")[0];
picture.addEventListener("click",function () {displaySlider(this.id);});

pictures.push(picture.getElementsByTagName("img")[0]);

/* ADD OR REMOVE PHOTOS IN FOLDER

All images names must respect format : "photo_x.jpg"

Change j to fit the number of photos in the images folder.

*/

for(var j=1 ; j <= 31 ; j++){
        var pic = picture.cloneNode(true);
        pic.getElementsByTagName("img")[0].src ="images/photo_" + j +".jpg";
        contentWrapper.appendChild(pic);
        pic.id = j;
        pic.addEventListener("click",function () {displaySlider(this.id);});
        pictures.push(pic.getElementsByTagName("img")[0]);
}

function displaySlider(id){
        slider.style.display = "flex";
        var sliderImage = slider.getElementsByClassName("slider-photo-wrapper")[0];
        var child = sliderImage.appendChild(pictures[id].cloneNode(true));
        child.id = id;
}

function hideSlider () {
        slider.style.display = "none";
        var sliderImage = slider.getElementsByClassName("slider-photo-wrapper")[0];
        sliderImage.removeChild(sliderImage.childNodes[0]);
}

//slider arrows

var arrowLeft = document.getElementsByClassName("arrow-left")[0].getElementsByTagName("img")[0];

var arrowRight = document.getElementsByClassName("arrow-right")[0].getElementsByTagName("img")[0];

arrowLeft.addEventListener("click", function (e) {
        e.stopPropagation();
        slideLeft();
})

arrowRight.addEventListener("click", function (e) {
        e.stopPropagation();
        slideRight();
})

function slideLeft() {
        var sliderImage = slider.getElementsByClassName("slider-photo-wrapper")[0];
        var index = sliderImage.childNodes[0].id;
        if(index == 0){
                index = 31;
        }else{
                index--;
        }
        sliderImage.removeChild(sliderImage.childNodes[0]);
        var child = sliderImage.appendChild(pictures[index].cloneNode(true));
        child.id = index;

}

function slideRight() {
        var sliderImage = slider.getElementsByClassName("slider-photo-wrapper")[0];
        var index = sliderImage.childNodes[0].id;

        if(index == 31){
                index = 0;
        }else{
                index++;
        }
        sliderImage.removeChild(sliderImage.childNodes[0]);
        var child = sliderImage.appendChild(pictures[index].cloneNode(true));
        child.id = index;

}



