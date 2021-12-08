function myFunction() {
    var a = document.getElementById("qt1");
    var b = document.getElementById("qt2");
    var c = document.getElementById("qt3");

    if (a.value == 'a' || b.value == 'b' || c.value == 'c') {
        document.getElementById("demo").innerHTML = "You're an alien";
        document.getElementById("imgClickAndChange").src = "../img/th.jpg"
    } 
    else if (a.value == 'b' || b.value == 'c' || c.value == 'a')
    {
        document.getElementById("demo").innerHTML = "You're an Bizarre";
        document.getElementById("imgClickAndChange").src = "../img/ee.jpg"
    }
    else {
        document.getElementById("demo").innerHTML = "You're an Human";
        document.getElementById("imgClickAndChange").src = "../img/aa.jpg"
    }
}