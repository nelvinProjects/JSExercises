var Person = new Object();
function createPerson() {
    var name = document.getElementById("username").value;
    var age = document.getElementById("userage").value;
    Person.name = name;
    Person.age = age;

    document.getElementById("test").innerHTML = "Name: "+ Person.name +
        " Age: " + Person.age;
}