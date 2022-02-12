var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("full-img");

function openFullImg(pic){
    fullImgBox.style.display="flex";
    fullImg.src=pic;
}
function closeFullImg(){
    fullImgBox.style.display="none";
}