function fizzBuzz(countTo, outputFor3, outputFor5) {
    for (var i = 0; i < countTo; i++) {
        if (i == 0) continue;
        if (!(i % 3) && !(i % 5)) {
            document.writeln(outputFor3 + outputFor5 + " " + i);
            document.writeln("<br>");
            continue;

        }
        if (!(i % 3)) {
            document.writeln(outputFor3 + " " + i);
            document.writeln("<br>");
            continue;
        }
        if (!(i % 5)) {
            document.writeln(outputFor5 + " " + i);
            document.writeln("<br>");
            continue;
        }
        document.writeln(i);
        document.writeln("<br>");
    }
}

var count = 0;

function iteration4(input) {
    var output;
    while (true) {
        if (!(input % 3)) {
            output = input / 3;
            document.writeln(input + "/" + 3 + " = " + output);
            document.writeln("<br>");
            count++;
        } else {
            var temp = input + 1;
            var temp2 = input - 1;
            console.log("first " + (temp & 3));
            if ((temp & 3)) {
                output = temp / 3;
                document.writeln("Adding 1");
                document.writeln("<br>");
                document.writeln(temp + "/" + 3 + " = " + output);
                document.writeln("<br>");
                count++
            } else if ((temp2 & 3)) {
                console.log("second " + !(temp2 & 3));
                output = temp2 / 3;
                document.writeln("Subtract 1");
                document.writeln("<br>");
                document.writeln(temp2 + "/" + 3 + " = " + output);
                document.writeln("<br>");
                count++
            }
        }
        input = output;
        console.log("input " + input);
        if (output < 1 || output == 1) {
            document.writeln("Total iterations " + count);
            document.writeln("Final number " + output);
            break;
        }
    }
}

function triples(input) {
    var tripleCounter = 0;
    input = input.toLowerCase();
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) === input.charAt(i + 1)) {
            console.log("first "+ input.charAt(i) + input.charAt(i + 1));
            console.log("3rd "+ input.charAt(i + 2));
            if (input.charAt(i) === input.charAt(i + 2)) {
                console.log("sec "+ true);
                console.log(input.charAt(i) + input.charAt(i + 1) + input.charAt(i + 2))
                tripleCounter++;
            }
        }
    }
    document.writeln(tripleCounter);
}