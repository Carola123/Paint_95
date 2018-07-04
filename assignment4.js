//Creating the parent division
window.onload = function() {

    var dotcolor = "black";
    var pencilsize = 15;
    //Parent
    var div = document.createElement("DIV");
    div.style.backgroundColor = "#d8d8d8";
    div.style.border = "1px solid black";
    div.style.height = "500px";
    div.style.width = "1000px";
    div.style.position = "relative";
    div.style.marginTop = "-10px";
    document.body.appendChild(div);

    //Child
    var child = document.createElement("DIV");
    child.style.backgroundColor = "#fff";
    child.style.height = "500px";
    child.style.width = "500px";
    child.style.margin = "0 auto";
    child.style.cursor = "pointer";
    div.appendChild(child);

    //color pallet

    var pallete = document.createElement("DIV");
    pallete.style.height = "150px";
    pallete.style.width = "1000px";
    pallete.style.border = "1px solid #000";

    document.body.appendChild(pallete);

    //Color boxes

    var colors = ["green", "blue", "black", "red", "yellow", "white"];

    for (var i = 0; i < colors.length; i++) {
        var element = document.createElement("DIV");
        element.setAttribute("id", colors[i]);
        element.setAttribute("class", "color");
        element.style.height = "30px";
        element.style.width = "30px";
        element.style.backgroundColor = colors[i];
        element.style.border = "1px solid #000";
        element.style.display = "inline-block";
        element.style.margin = "1px";
        pallete.appendChild(element);

    }

    // Putting a black dot on the screen

    child.addEventListener("mousemove", putdot);
    child.addEventListener("mousedown", engaged);
    child.addEventListener("mouseup", disengaged)
    var dragging = false;

    function engaged(e) {
        dragging = true;
        putdot(e);
    }

    function disengaged() {
        dragging = false
    }

    function putdot(e) {

        if (dragging) {
            var left = e.clientX;
            var top = e.clientY;
            var dot = document.createElement("DIV");
            dot.style.height = pencilsize + "px";
            dot.style.width = pencilsize + "px";
            dot.style.borderRadius = "50%";
            dot.style.backgroundColor = dotcolor;
            dot.style.position = "absolute";
            dot.style.left = left + "px";
            dot.style.top = top + "px";
            dot.style.display = "inline-block";
            dot.style.transform = "translate(-110%,-50%)";

            child.appendChild(dot);
        }
    }

    //Changing the colors
    var colorval = document.getElementsByClassName("color");
    for (var i = 0; i < colorval.length; i++) {
        colorval[i].addEventListener("click", changecolor);
    }

    function changecolor(e) {

        var id = e.target.getAttribute("id");
        dotcolor = id;
    }

    //Changing the pencil's size

    //increase button

    var d = document.createElement("DIV");
    pallete.appendChild(d);

    var increase = document.createElement("span");
    increase.setAttribute("id", "inc")
    increase.style.height = "30px";
    increase.style.width = "30px";
    increase.style.backgroundColor = "black";
    increase.style.color = "white";
    increase.innerHTML = "+";
    increase.style.textAlign = "center";
    increase.style.fontSize = "32px";
    increase.style.padding = "10px";
    increase.style.borderRadius = "5px";
    increase.style.display = "inline-block";
    increase.style.cursor = "pointer";
    d.appendChild(increase);

    //Current size indicator
    var sizeindi = document.createElement("span");
    sizeindi.setAttribute("id", "sizein");
    sizeindi.innerHTML = "15";
    sizeindi.style.display = "inline-block";
    sizeindi.style.margin = "10px";

    d.appendChild(sizeindi);

    //decrese button

    var decrease = document.createElement("span");
    decrease.setAttribute("id", "dec");
    decrease.style.height = "30px";
    decrease.style.width = "30px";
    decrease.style.backgroundColor = "black";
    decrease.style.color = "white";
    decrease.innerHTML = "-";
    decrease.style.textAlign = "center";
    decrease.style.fontSize = "32px";
    decrease.style.padding = "10px";
    decrease.style.borderRadius = "5px";
    decrease.style.display = "inline-block";
    decrease.style.cursor = "pointer";
    d.appendChild(decrease);

    //Adding event listeners to the + / - span elements
    var incr = document.getElementById("inc");
    incr.addEventListener("click", changesize);

    var decr = document.getElementById("dec");
    decr.addEventListener("click", changesize);

    function changesize(e) {
        var targetId = e.target.getAttribute("id");
        var sizein = document.getElementById("sizein");
        if (targetId == "inc") {
            if (pencilsize < 55) {
                pencilsize = pencilsize + 10;
                sizein.innerHTML = pencilsize;
            }

        } else {

            if (pencilsize > 5) {
                pencilsize = pencilsize - 10;
                sizein.innerHTML = pencilsize;
            }
        }
    }

}
