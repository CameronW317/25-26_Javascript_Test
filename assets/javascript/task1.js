function showButton() {
    let button = document.getElementById("buttonTask1");

    if (button.style.display === "none") {
        button.style.display = "block";
    }
}
function hidePicture(){
    let image = document.getElementById("imageTask1");

    if (image.style.display === "block") {
        image.style.display = "none";
    }
}