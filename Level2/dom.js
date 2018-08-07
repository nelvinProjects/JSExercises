function createParagraph() {
    var para = document.createElement("P");
    var text = document.createTextNode("A paragraph");
    para.appendChild(text);
    para.setAttribute("id", "myPara");
    document.body.appendChild(para)
}

function changeParagraph() {
    document.getElementById("myPara").innerHTML = document.getElementById("newPara").value;
}

function removeParagraph() {
    document.body.removeChild(document.getElementById("myPara"));
}
