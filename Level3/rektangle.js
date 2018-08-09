function create() {
    // let word = document.getElementById("word").value;
    // let width = document.getElementById("width").value;
    // let height = document.getElementById("height").value;

    let word = "rekt";
    let width = 1;
    let height = 3;

    let table = document.createElement("TABLE");
    table.setAttribute("id", "mytable");

    // row(word, width, table);
    // column(word, height, width, table);
    // row(word, width, table);
    
    for (let i = 1; i < 4; i++){
        box(word,width,height,table,i);
        rightbox(word, width, height, table)
        // rightrow(word,width,table)
    }

    document.getElementById("output").innerHTML += "-".repeat(100) + "<br>";
    document.getElementById("output").appendChild(table);

    let tab = document.getElementById("mytable");
    console.log(tab.rows[1])

}

function box(word, width, height, table, rowid) {
    row(word, width, table,rowid);
    column(word, height, width, table);
    row(word, width, table);
}

function rightbox(word, width, height, table) {
    rightrow(word,width,table);
    rightcolumn(word,height,width,table);
    rightrow(word,width,table);
}
let bigcounter =1;
function row(word, width, table, id) {
    let simplecount = 0;
    for (let i = 0; i < width; i++) {
        let row = document.createElement("TR");
        row.setAttribute("id", "a"+bigcounter);
        for (let j = 0; j < (width * word.length); j++) {
            if (simplecount === width) {
                break;
            }
            let cell = document.createElement("TD");
            console.log("j " + j + " char " + word.charAt(j))
            cell.innerText = word.charAt(j);

            row.appendChild(cell);
            if (j === word.length - 1) {
                j = 0;
                simplecount++;
            }
        }
        table.appendChild(row);
    }
}

function rightrow(word, width, table) {
    let simplecount = 0;
    for (let i = 0; i < width; i++) {
        let row = document.createElement("TR");
        // let row = document.getElementById(i+1);
        for (let j = 1; j < (width * word.length); j++) {
            if (simplecount === width) {
                break;
            }
            let cell = document.createElement("TD");
            console.log("j " + j + " char " + word.charAt(j))
            cell.innerText = word.charAt(j);

            row.appendChild(cell);
            if (j === word.length - 1) {
                j = 0;
                simplecount++;
            }
        }
        table.appendChild(row);
    }
}

function column(word, height, width, table) {
    let count = 1;

    for (let n = 0; n < height-1; n++) {
        let srow = document.createElement("TR");
        let wordcount = word.length * width;
        for (let m = 0; m < (width * word.length); m++) {
            let cell = document.createElement("TD");
            if (m === 0) {
                console.log("m " + m + " char " + word.charAt(count))
                cell.innerText = word.charAt(count);
            }
            else if (m === word.length - 1) {
                console.log("m " + m + " char " + word.charAt(count))
                cell.innerText = word.charAt(count);
                // wordcount -= word.length;

            }
            // else if (m === (word.length *2)) {
            //     cell.innerText = word.charAt(count);
            // }
            else if (m+1 == (width * word.length)) {
                cell.innerText = word.charAt(count);
                count++
            }
            else {
                console.log("empty m " + m)
                cell.innerText = " ";
            }
            srow.appendChild(cell);
        }
        table.appendChild(srow);
    }
}

function rightcolumn(word, height, width, table) {
    let count = 1;

    for (let n = 0; n < height-1; n++) {
        let srow = document.createElement("TR");
        let wordcount = word.length * width;
        for (let m = 0; m < (width * word.length); m++) {
            let cell = document.createElement("TD");
            // if (m === 0) {
            //     console.log("m " + m + " char " + word.charAt(count))
            //     cell.innerText = word.charAt(count);
            // }
             if (m === word.length - 1) {
                console.log("m " + m + " char " + word.charAt(count))
                cell.innerText = word.charAt(count);
                // wordcount -= word.length;

            }
            // else if (m === (word.length *2)) {
            //     cell.innerText = word.charAt(count);
            // }
            else if (m+1 == (width * word.length)) {
                cell.innerText = word.charAt(count);
                count++
            }
            else {
                console.log("empty m " + m)
                cell.innerText = " ";
            }
            srow.appendChild(cell);
        }
        table.appendChild(srow);
    }
}