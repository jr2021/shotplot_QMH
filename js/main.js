$(document).ready(function() {
    localStorage.setItem("csv","");
    $("body").fadeIn(250);
    $("#overlay").fadeIn(250);
	$("#overlay").click(function () {
        $("#overlay").fadeOut(250);
    });
});

function point(axis, value) {
    localStorage.setItem(axis, value);
}

function points(xAxis, yAxis) {
    var x = localStorage.getItem("x");
    var y = localStorage.getItem("y");
    var csv = localStorage.getItem("csv");
    var closing = "</div>"
    var newVal = x + "," + y + csv + closing;
    localStorage.setItem("csv", newVal);
}

function postTeam() {
    $("#queens-shot, #opponent-shot").fadeTo(250, ".25");
    $("#export, #rink").fadeTo(250, "1");
}

function postPoints() {
    $("#export, #rink").fadeTo(250, ".25");
    $("#queens-shot, #opponent-shot").fadeTo(250, "1");
}

function flip(axis) {
    if (axis === "x") { 
        $("#columns").css("z-index", "1");
        $("#rows").css("z-index", "2");
    }
    else {
        $("#rows").css("z-index", "1");
        $("#columns").css("z-index", "2");
    }
}

function team(team) {
    var opening = "<div>";
    var csv = localStorage.getItem("csv");
    localStorage.setItem("csv", opening + team + "," + csv);
    postTeam();
}

function display() {
    var title = "<title>shotplot_QMH | data</title>"
    var header = "<div>team,x,y</div>";
    var csv = localStorage.getItem("csv");
    var newWindow = window.open();
    newWindow.document.write(title);
    newWindow.document.write(header);
    newWindow.document.write(csv);
}

function main(axis, value) {
    if (axis == "x") {
        point(axis, value);
    }
    else {
        point(axis, value);
        points("x","y");
        postPoints();
    }
    flip(axis);
}
