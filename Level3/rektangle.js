function create() {
    // let word = document.getElementById("word").value;
    // let width = document.getElementById("width").value;
    // let height = document.getElementById("height").value;

    let word = "test";
    let width = 2;
    let height = 2;

    let store = [];
    let make = "";

    let table = document.createElement("TABLE");


    for (let i = 0; i < width; i++) {
        store.push([row(word)])
        // make += row(word);
        if (i === 0) {
            store.push([column(word)])
        //     make += column(word);
        }
        // if (i === width - 1) {
        //     make += column(word);
        // }
    }

    // document.getElementById("output").innerHTML = make;
    console.log(store)
    document.getElementById("output").innerHTML += "-".repeat(100) + "<br>";
    document.getElementById("output").innerHTML += store[0];
    document.getElementById("output").innerHTML += store[1];
    document.getElementById("output").innerHTML += store[2];
}

function row(word) {
    // let temp = "";
    let temp = [];
    for (let i = 0; i < word.length; i++) {
        // temp += word.charAt(i) + " ";
        temp.push(word.charAt(i));
    }
    return temp;
}

function column(word) {
    let temp = [];
    for (let j = 1; j < word.length; j++) {
            // temp[j-1] = word.charAt(j);
            // temp += space * word.length;
            temp.push(word.charAt(j));
        }
    // let temp = "";
    // let space = "";
    // for (let j = 1; j < word.length; j++) {
    //     temp += "<br>" + word.charAt(j);
    //     temp += space * word.length;
    //     temp += word.charAt(j);
    // }
    return temp;
}