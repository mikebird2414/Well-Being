// Displays current date at header
const dateTime = moment().format('L');
$("#currentDay").html(dateTime);

$(document).ready(function(){
    $('.emojiButton').click (function(){
        var date = $(this).parent().attr('id');
        var emotion = $(this).siblings('.desc').html();
        localStorage.setItem(date, emotion);
        console.log("thanks");
    })
})