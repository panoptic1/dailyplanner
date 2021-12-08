$(document).ready(function() {
    //listen for save button clicks
    $('.saveBtn').on('click', function() {
        console.log("You clicked!");
        //get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        console.log(time);
        console.log(value);
    })
})