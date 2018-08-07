var dataToUse;

function readJSON() {
    var data = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
    var request = new XMLHttpRequest();
    request.open('GET', data);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        dataToUse = request.response;
    }
}

function search() {
    var value = document.getElementById("searchBar").value;
    for (var i = 0; i < dataToUse.length; i++) {
        if (dataToUse[i]["nm"] === value || dataToUse[i]["hse"] === value) {
            var out = "Name: " + dataToUse[i]["nm"] + "<br> House: " + dataToUse[i]["hse"] +
                "<br>Year: " + dataToUse[i]["yrs"] + "<br>City: " + dataToUse[i]["cty"];
            document.getElementById("temp").innerHTML += out + "<br><br>";
        }
    }
}