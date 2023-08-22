// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var date = dayjs().format('dddd, MMMM D YYYY, h:mm:ss ');
var currentDateAndTime = document.getElementById('currentDay')
currentDateAndTime.textContent = date




function init() {
    var hour9 = localStorage.getItem("hour9")
    $("#hour9").text(hour9);

    var hour10 = localStorage.getItem("hour10")
    $("#hour10").text(hour10);

    var hour11 = localStorage.getItem("hour11")
    $("#hour11").text(hour11);

    var hour12 = localStorage.getItem("hour12")
    $("#hour12").text(hour12);

    var hour13 = localStorage.getItem("hour13")
    $("#hour13").text(hour13);

    var hour14 = localStorage.getItem("hour14")
    $("#hour14").text(hour14);

    var hour15 = localStorage.getItem("hour15")
    $("#hour15").text(hour15);

    var hour16 = localStorage.getItem("hour16")
    $("#hour16").text(hour16);

    var hour17 = localStorage.getItem("hour17")
    $("#hour17").text(hour17);
}


$(function event() {
    var currentHour = new date().getHour();
    $('time-block').each(function () {
        var eventStatus = parseInt($(this).attr('time'));

        if (eventStatus < currentHour) {
            $(this).addClass('past');
        } else if (eventStatus === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future')
        }
        
    })

});

function saveEvent(event) {
    var textarea = event.target.parentElement.querySelector('.description');
    localStorage.setItem(textArea.id, textArea.value)
}

$(".btn").on("click", saveEvent)

init()