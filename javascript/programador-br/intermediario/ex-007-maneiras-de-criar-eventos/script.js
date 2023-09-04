function f(e) {
    console.log(`teste`);
    // console.log(this);
    console.log(e);
}

function f1(e) {
    console.log(`teste F1`);
    // console.log(this);
    console.log(e);
    console.log(e.target);
}

window.onload = function () {
    let h1 = document.getElementsByTagName(`h1`)[0];

    h1.addEventListener("click", f1);
}