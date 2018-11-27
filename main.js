$(document).ready(function() {
    localStorage.setItem('csv','');
});

function point(axis, value) {
    localStorage.setItem(axis, value);
}

function postTeam() {
    $('#rink').fadeTo(500, '1');
    $("#queens-shot").fadeTo(500, '.25');
    $('#opponent-shot').fadeTo(500, '.25');
}

function postPoints() {
    $('#rink').fadeTo(500, '.25');
    $("#queens-shot").fadeTo(500, '1');
    $('#opponent-shot').fadeTo(500, '1');
    $('#export').fadeTo(500, '1');
}

function points() {
    localStorage.setItem('csv', localStorage.getItem('x') + ', ' + localStorage.getItem('y') + '</div>' + '\n' + localStorage.getItem('csv'));
}

function flip(axis) {
    if (axis === 'x') {
        $('#columns').css('z-index', '1');
        $('#rows').css('z-index', '2');
    }
    else {
        $('#rows').css('z-index', '1');
        $('#columns').css('z-index', '2');
    }
}

function team(team) {
    localStorage.setItem('csv', '<div>' + team + ', ' + localStorage.getItem('csv'));
    postTeam();
}

function display() {
    var newWindow = window.open();
    newWindow.document.write('<title>shotplot_QMH | data</title>');
    newWindow.document.write('<div>team, x, y</div>')
    newWindow.document.write(localStorage.getItem('csv'));
}

function main(axis, value) {
    if (axis === 'x') {
        point(axis, value);
    }
    else {
        point(axis, value);
        points();
        postPoints();
    }
    flip(axis);
}