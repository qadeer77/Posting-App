
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var para34 = document.getElementById("para3");
var para35 = document.getElementById("para4");
var para36 = document.getElementById("para5");

function post() {
    var text = document.getElementById("textarea1");
    var textarea = document.createElement("p");
    var paraText = document.createTextNode(text.value);
    textarea.setAttribute("class", "attt");
    textarea.appendChild(paraText);
    div4.appendChild(textarea);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    text.value = " ";
    div1.style.display = "block";
    var name = document.getElementById("qadeer");
    name.style.display = "none";
}

function like() {
    var like = document.getElementById("icon12");
    like.style.color = "blue";
}

var div10 = document.getElementById("div10");
var div11 = document.getElementById("div11");

function commment() {
    var comment = document.getElementById("icon13");
    var commentAdd = document.createElement("input");
    commentAdd.setAttribute("type", "text");
    commentAdd.setAttribute("placeholder", "Write a Comment");
    commentAdd.setAttribute("class", "comment1");
    commentAdd.appendChild(comment);
    div11.appendChild(commentAdd);
    div10.appendChild(div11);
}

function share() {
    var share = document.getElementById("icon14");
    share.style.color = "blue"
}

function red() {
    var text2 = document.getElementById("textarea1");
    text2.style.color = "white";
    text2.style.backgroundColor = "red";
    div2.style.backgroundColor = "red";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}

function orange() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "orange";
    text2.style.color = "white";
    div2.style.backgroundColor = "orange";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}

function blue() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "blue";
    text2.style.color = "white";
    div2.style.backgroundColor = "blue";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}

function yellow() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "yellow";
    text2.style.color = "black";
    div2.style.backgroundColor = "yellow";
    div2.style.color = "black";
}

function green() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "green";
    text2.style.color = "white";
    div2.style.backgroundColor = "green";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}

function purple() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "darkmagenta";
    text2.style.color = "white"
    div2.style.backgroundColor = "darkmagenta";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}
function black() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "black";
    text2.style.color = "white"
    div2.style.backgroundColor = "black";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}

function darkPurple() {
    var text2 = document.getElementById("textarea1");
    text2.style.backgroundColor = "rgb(88, 11, 165)";
    text2.style.color = "white"
    div2.style.backgroundColor = "rgb(88, 11, 165)";
    div2.style.color = "white";
    para34.style.color = "black";
    para35.style.color = "black";
    para36.style.color = "black";
}