// CLOCK FOR TRAIN SCHEDULER PORTFOLIO IMAGE using Vanilla Javascript

var hours = moment().format("h");
var minutes = moment().format("mm");
var seconds = moment().format("ss");

$("#hours").html("<span class='show'>" + hours + "<span>");
$("#minutes").html("<span class='show'>" + minutes + "<span>");
$("#seconds").html("<span class='show'>" + seconds + "&nbsp <span>");

function currentTime() {
    if (seconds !== moment().format("ss")) {
        seconds = moment().format("ss");
        updateHtml("#seconds", seconds);
    }
    if (minutes !== moment().format("mm")) {
        minutes = moment().format("mm");
        updateHtml("#minutes", minutes);
    }
    if (hours !== moment().format("h")) {
        hours = moment().format("h");
        updateHtml("#hours", hours);
    }
    setTimeout(currentTime, 1000);
};

function updateHtml(id, value) {
    var contElem = document.querySelector(id);
    var hideElem = document.querySelector(".hide");

    contElem.querySelector(".show").className="hide";

    var span = document.createElement("span");
    span.className = "show";
    span.innerText = value;
    contElem.appendChild(span);
}

currentTime();

// END CLOCK 
