// var car;
var carDamages = {};
var count = 0;
var costs = {tire: 10, windscreen: 15, dent: 20, scratch: 10};

function checkIn() {
    var temp = [];
    var car = document.getElementById("newcar").value;
    var damages = document.getElementsByClassName("damages");
    for (var i = 0; i < damages.length; i++) {
        if (damages[i].checked) {
            temp.push(damages[i].value);

        }
    }
    carDamages[count] = {reg: car, damages: temp};
    count++;
}

function checkOut() {
    var car = document.getElementById("outcar").value;
    delete carDamages[car];
    document.getElementById("byecar").innerHTML += "Removed car: " + car + "<br>";
    console.log(JSON.stringify(carDamages))
}

function garage() {
    var temp = "";
    for (var i = 0; i < count; i++) {
        temp += "Car reg no. " + carDamages[i].reg + " Damages: " +
            carDamages[i].damages + "<br>";
        console.log(temp)
    }
    document.getElementById("garageout").innerHTML = temp;
}

function calculateBill() {
    var bill = [];
    var finalbill = 0;
    var car = document.getElementById("billcar").value;
    for (var i = 0; i < count; i++) {
        if (carDamages[i].reg === car) {
            for (var j = 0; j < carDamages[i].damages.length; j++) {
                finalbill += costs[carDamages[i].damages[j]];
                bill.push(carDamages[i].damages[j] + ": £" + costs[carDamages[i].damages[j]]);
            }
            break;
        }
    }
    var out = "Final bill: £" + finalbill;

    var plus = "<br>";
    for (var k = 0; k < bill.length; k++) {
        plus += bill[k] + "<br>";
    }

    document.getElementById("billout").innerHTML = out + plus;
}