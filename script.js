const body = document.body;
let hour = document.getElementById('hour'),
    minute = document.getElementById('minute'),
    second = document.getElementById('second'),
    greetingSpan = document.getElementById('greeting'),
    nameSpan = document.getElementById('name'),
    focusSpan = document.getElementById('focus'),
    amPmSpan = document.getElementById('ampm');
var amPm = '';


function showTimme() {
    let today = new Date();
    var hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();
    amPm = parseInt(hours) >= 12 ? "p.m." : "a.m.";
    hours = "0" + (hours >= 12 ? hours % 12 : hours);
    minutes = minutes <= 9 ? `0${minutes}` : `${minutes}`;
    seconds = seconds <= 9 ? `0${seconds}` : `${seconds}`;
    hour.innerText = hours + " : ";
    minute.innerText = minutes + " : ";
    second.innerText = seconds + "  ";
    amPmSpan.innerText = amPm;
}

setInterval(showTimme, 1000);

// set greeting
let today = new Date();
var hours = today.getHours();
if (amPm == "a.m.") {
    greetingSpan.innerText = 'Good Morning ! '
} else if (parseInt(hours) < 18) {
    greetingSpan.innerText = 'Good Afternoon ! '
} if (parseInt(hours) > 18) {
    greetingSpan.innerText = 'Good Evening ! '
}
function setName(e) {
    if (e.type == 'keypress') {
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('Name', e.target.innerText)
        }
    } else {
        localStorage.setItem('Name', e.target.innerText)
    }


}

function getName() {
    if (localStorage.getItem('Name') == null) {
        localStorage.setItem('Name', "Enter Name");
    }
    nameSpan.innerText = localStorage.getItem('Name');
}
getName();
nameSpan.addEventListener('keypress', setName);
nameSpan.addEventListener('blur', setName);

function setBackground() {
    if (amPm == 'a.m.') {
        body.style.backgroundImage = "url('./images/morning.jpg')";
    } else if (hours > 18) {
        body.style.backgroundImage = "url('./images/evening.jpg')";
    } else {
        body.style.backgroundImage = "url('./images/afternoon.jpg')";
    }
}
setBackground();

function setFocus(e) {
    if (e.type == 'keypress') {
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('FocusOfTime', e.target.innerText)
        }
    } else {
        localStorage.setItem('FocusOfTime', e.target.innerText)
    }


}

function getFocus() {
    if (localStorage.getItem('FocusOfTime') == null) {
        localStorage.setItem('FocusOfTime', "Enter Your Focus of Time");
    }
    focusSpan.innerText = localStorage.getItem('FocusOfTime');
}
getFocus();
focusSpan.addEventListener('keypress', setFocus);
focusSpan.addEventListener('blur', setFocus);
