$(document).ready(function() {
    //listen for save button clicks
    $('.saveBtn').on('click', function() {
        console.log("You clicked!");
        //get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        console.log(time);
        console.log(value);

        //save in localStorage
        localStorage.setItem(time, value);

        //Show notification that item was saved to localStorage by adding 'show' class
        $('.notification').addClass('show');

        //Timeout to remove 'show' class after 5 seconds
        setTimeout(function() {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function updateTime() {
        //get current number of hours
        var currentHour = moment().hours();
        console.log(currentHour);

        //loop over time blocks
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            console.log(blockHour);

            //check whether the block is in the past, present or future
            if (blockHour < currentHour){
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    updateTime();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(updateTime, 15000);

    //load any saved data from local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));

    //display current day
    $('#current-day').text(moment().format('dddd, MMMM Do'));
})