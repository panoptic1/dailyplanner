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
})