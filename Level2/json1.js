var dataToUse;
function readJSON() {
    var data = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', data);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        dataToUse = request.response;
        console.log(dataToUse)
        console.log(JSON.stringify(dataToUse))
        document.writeln(JSON.stringify(dataToUse))
    };
}