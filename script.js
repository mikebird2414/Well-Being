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

var quotesUrl = "https://type.fit/api/quotes";
fetch(quotesUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });