var ones = document.getElementById("ones");
var circle1 = document.getElementById("circle1");

var two = document.getElementById("two");
var circle2 = document.getElementById("circle2");

var three = document.getElementById("three");
var circle3 = document.getElementById("circle3");

var four = document.getElementById("four");
var circle4 = document.getElementById("circle4");

var section1 = document.getElementById("section1");



function arrow1() {
    ones.classList.remove("card");
    ones.classList.add("cards");
    circle1.style.backgroundColor = "grey";
}

function arrow2() {
    two.classList.remove("card");
    two.classList.add("cards");
    circle2.style.backgroundColor = "grey";
}

function arrow3() {
    three.classList.remove("card");

    three.classList.add("cards");
    circle3.style.backgroundColor = "grey";
}

function arrow4() {
    four.classList.remove("card");
    four.classList.add("cards");
    circle4.style.backgroundColor = "grey";
}

function reset() {
    ones.classList.add("card");
    two.classList.add("card");
    three.classList.add("card");
    four.classList.add("card");

    circle1.style.backgroundColor = "yellow";
    circle2.style.backgroundColor = "blue";
    circle3.style.backgroundColor = "green";
    circle4.style.backgroundColor = "red";

}