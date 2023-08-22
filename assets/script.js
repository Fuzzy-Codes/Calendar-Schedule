var date = dayjs().format('dddd, MMMM D YYYY, h:mm:ss ');
var currentDateAndTime = document.getElementById('currentDay')
currentDateAndTime.textContent = date

$(document).ready(function() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
        var eventStatus = $(this).attr('id').slice(5);
        console.log(eventStatus)
        console.log(currentHour)

        if (eventStatus < currentHour) {
            $(this).addClass('past');
        } else if (eventStatus > currentHour) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present')
        }
        
    })
})

$(".saveBtn").on("click", function () {
    var textarea = $(this).siblings(".col-md-10").val()
    var hourId = $(this).parent().attr("id")
    localStorage.setItem(hourId, JSON.stringify(textarea))
})

for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)));
}
