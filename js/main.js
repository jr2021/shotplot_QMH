$(document).ready(function() {
    localStorage.setItem('csv',''); // clear localStorage
    $('body').fadeIn(500); // fade in body
    setTimeout(displayOverlay, 0);
	setTimeout(dismissOverlay, 7500);
	$("#overlay").click(dismissOverlay);
});

function dismissOverlay() {
	$("#overlay").fadeOut(500); // fade out overlay
}

function displayOverlay() {
	$("#overlay").fadeIn(500); // fade in overlay
}

function point(axis, value) {
    localStorage.setItem(axis, value); // store point
}

function postTeam() {
    $('#queens-shot').fadeTo(500, '.25'); // fade out queen's
    $('#opponent-shot').fadeTo(500, '.25'); // fade out opponent
    $('#export').fadeTo(500, '1'); // fade in export
    $('#rink').fadeTo(500, '1'); // fade in rink
}

function postPoints() {
    $('#export').fadeTo(500, '.25'); // fade out export
    $('#rink').fadeTo(500, '.25'); // fade out rink
    $('#queens-shot').fadeTo(500, '1'); // fade in queen's
    $('#opponent-shot').fadeTo(500, '1'); // fade in opponent
}

function points(xAxis, yAxis) {
    localStorage.setItem('csv', localStorage.getItem(xAxis)+','+localStorage.getItem(yAxis)+'</p>'+localStorage.getItem('csv')); // store points
}

function flip(axis) {
    if (axis === 'x') { 
        $('#columns').css('z-index', '1'); // columns back
        $('#rows').css('z-index', '2'); // rows forward
    }
    else {
        $('#rows').css('z-index', '1'); // rows back 
        $('#columns').css('z-index', '2'); // columns forward
    }
}

function team(team) {
    localStorage.setItem('csv', '<p>'+team+','+localStorage.getItem('csv')); // store team
    postTeam();
}

function display() {
    var newWindow = window.open(); // open window
    newWindow.document.write('<title>data</title>') // write title
    newWindow.document.write('<p>team,x,y</p>') // write label
    newWindow.document.write(localStorage.getItem('csv')); // write data
}

function main(axis, value) {
    if (axis == 'x') {
        point(axis, value);
    }
    else {
        point(axis, value);
        points('x','y');
        postPoints();
    }
    flip(axis);
}