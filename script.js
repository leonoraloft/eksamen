document.addEventListener("DOMContentLoaded", start);


function start() {
    designChangeImg();
    changeImg();
}

function changeImg() {
    document.querySelector(".sugeroer").src = "image/sugeroer2.jpg";

    setTimeout(changeImg1, 1000);
}

function changeImg1() {
    document.querySelector(".sugeroer").src = "image/sugeroer5.jpg";

    setTimeout(changeImg2, 1000);
}

function changeImg2() {
    document.querySelector(".sugeroer").src = "image/sugeroer4.jpg";

    setTimeout(changeImg3, 1000);
}

function changeImg3() {
    document.querySelector(".sugeroer").src = "image/sugeroer3.jpg";

    setTimeout(changeImg4, 1000);
}

function changeImg4() {
    document.querySelector(".sugeroer").src = "image/sugeroer1.jpg";

    setTimeout(changeImg, 1000);
}


function designChangeImg() {
    document.querySelector(".design_loop").src = "image/blad_skygge.jpg";

    setTimeout(designChangeImg1, 1500);
}

function designChangeImg1() {
    document.querySelector(".design_loop").src = "image/bladskygge_2.jpg";

    setTimeout(designChangeImg2, 1500);
}

function designChangeImg2() {
    document.querySelector(".design_loop").src = "image/bladskygge_3.jpg";

    setTimeout(designChangeImg, 1500);
}
