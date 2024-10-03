function h1click() {
    h1 = document.getElementById("title1");

    h1.style.backgroundColor = "green";
}

function changeH1(i) {
    h1 = document.getElementById("title1");

    h1.innerText = i.value;
}

function hideH1() {
    let h1 = document.getElementById("title1")
    h1.style.display = "none"
}