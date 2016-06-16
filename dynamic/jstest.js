$(document).ready(function(){

// Polyfill for Input placeholders
$('input, textarea').placeholder();

//Check if using mobile layout
var mobile;
alert('mobile');


if ($('#login-button a').css('cursor') == 'pointer') {
mobile = true;
}

// check again when window is resized
$(window).resize(function() {
if ($('#login-button a').css('cursor') == 'pointer') {
mobile = true;
}
else {
mobile = false;
}
});

// Login Modal

if (mobile == true) {
alert('mobile');

$('#login-button a').click(function() {
alert('toggle modal');
});
}
else {
$('#login-button a').click(function() {
event.preventDefault();
});
}

});