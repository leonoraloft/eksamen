document.addEventListener("DOMContentLoaded", start);

const url = "";
let forhandlere = [];

const skabelon = document.querySelector("template");
const liste = document.querySelector(".liste");



function start() {
    designChangeImg();
    bestilChangeImg();
    changeImg();
    getJson();
}

function changeImg() {
    document.querySelector(".story_img1").src = "image/sugeroer2.jpg";

    //    document.querySelector(".story_img1").classList.add(".overgang");
    setTimeout(changeImg1, 1000);
}

function changeImg1() {
    document.querySelector(".story_img1").src = "image/sugeroer5.jpg";

    setTimeout(changeImg2, 1000);
}

function changeImg2() {
    document.querySelector(".story_img1").src = "image/sugeroer4.jpg";

    setTimeout(changeImg3, 1000);
}

function changeImg3() {
    document.querySelector(".story_img1").src = "image/sugeroer3.jpg";

    setTimeout(changeImg4, 1000);
}

function changeImg4() {
    document.querySelector(".story_img1").src = "image/sugeroer1.jpg";

    setTimeout(changeImg, 1000);
}



function bestilChangeImg() {
    document.querySelector(".loop").src = "image/glas_blaa.jpg";

    //    document.querySelector(".story_img1").classList.add(".overgang");
    setTimeout(bestilChangeImg1, 1000);
}

function bestilChangeImg1() {
    document.querySelector(".loop").src = "image/glas_gul.jpg";

    setTimeout(bestilChangeImg2, 1000);
}

function bestilChangeImg2() {
    document.querySelector(".loop").src = "image/glas_pink.jpg";

    setTimeout(bestilChangeImg3, 1000);
}

function bestilChangeImg3() {
    document.querySelector(".loop").src = "image/glas_sort.jpg";

    setTimeout(bestilChangeImg, 1000);
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




async function getJson() {
    const response = await fetch(url);
    forhandlere = await response.json();
    vis();

}


function vis() {
    forhandlere.forEach(forhandler => {
        console.log(forhandlere);
        const klon = skabelon.cloneNode(true).content;

        klon.querySelector(".forhandler_navn").textContent = forhandler.forhandler_navn;
        klon.querySelector(".forhandler_adresse").textContent = forhandler.forhandler_addresse;
        liste.appendChild(klon);
    });
}
