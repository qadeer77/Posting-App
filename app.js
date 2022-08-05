
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");

function post() {
    var text = document.getElementById("textarea1");
    var textarea = document.createElement("p");
    var paraText = document.createTextNode(text.value);
    textarea.setAttribute("class", "attt");
    textarea.appendChild(paraText)
    div4.appendChild(textarea);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);

    text.value = " ";
}