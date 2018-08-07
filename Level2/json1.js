function readJSON() {
    var dataToUse;
    var data = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', data);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        dataToUse = request.response;
        // console.log(dataToUse)
        // console.log(JSON.stringify(dataToUse))
        document.writeln("<b>Squad Name: </b>" + dataToUse['squadName']);
        document.writeln("<br>");
        document.writeln("Squad Town: " + dataToUse['homeTown']);
        document.writeln("<br>");
        document.writeln("Formed in: " + dataToUse['formed']);
        document.writeln("<br>");
        document.writeln("Base: " + dataToUse['secretBase']);
        document.writeln("<br>");
        document.writeln("Active: " + dataToUse['active']);
        document.writeln("<br>");
        document.writeln("<b> Members </b>");
        var table = document.createElement("TABLE");
        var header = document.createElement("TH");
        var header1 = document.createElement("TH");
        var header2 = document.createElement("TH");
        var header3 = document.createElement("TH");

        header1.innerText = "Name";
        table.appendChild(header1);
        header.innerHTML = "Age";
        table.appendChild(header);
        header3.innerText = "Secret Identity";
        table.appendChild(header3);
        header2.innerHTML = "Powers";
        table.appendChild(header2);


        for (var i = 0; i < 3; i++) {
            var row = document.createElement("TR");
            var cell = document.createElement("TD");
            var cell1 = document.createElement("TD");
            var cell2 = document.createElement("TD");
            var cell3 = document.createElement("TD");
            cell.innerHTML = dataToUse["members"][i]["name"];
            cell1.innerHTML = dataToUse["members"][i]["age"];
            cell2.innerHTML = dataToUse["members"][i]["secretIdentity"];
            cell3.innerHTML = dataToUse["members"][i]["powers"];
            row.appendChild(cell);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            table.appendChild(row);
        }
        document.body.appendChild(table);
    };
}
