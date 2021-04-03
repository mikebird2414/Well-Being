document.getElementById("message").innerHTML = localStorage.getItem("today");

// Notebook = localStorage.getItem("today");

var messageInput = document.querySelector("#message");
var saveBtn = document.querySelector("#saveBtn");
var quote = document.querySelector("#quote");



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd;
console.log(today)


saveBtn.addEventListener("click", setDailyStorage);

function setDailyStorage() {
    var dailyDiary = messageInput.value;
localStorage.setItem(today, dailyDiary);
}


var quotesUrl = "https://type.fit/api/quotes";
fetch(quotesUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    var randomQuote = data[Math.floor(Math.random()*data.length)];
    console.log(randomQuote);

    quote.innerHTML = randomQuote.text;

  

  });


    const dateTime = moment().format("L");
    var dateTimeCheck0 = moment().format("L");
    var dateTimeCheck1 = moment().subtract(1, "days").format("L");
    var dateTimeCheck2 = moment().subtract(2, "days").format("L");
    var dateTimeCheck3 = moment().subtract(3, "days").format("L");
    var dateTimeCheck4 = moment().subtract(4, "days").format("L");
    dailyEmotionCheck0 = localStorage.getItem(dateTimeCheck0);
    dailyEmotionCheck1 = localStorage.getItem(dateTimeCheck1);
    dailyEmotionCheck2 = localStorage.getItem(dateTimeCheck2);
    dailyEmotionCheck3 = localStorage.getItem(dateTimeCheck3);
    dailyEmotionCheck4 = localStorage.getItem(dateTimeCheck4);
    var date1 = moment().format('LL'); 
    var date2 = moment().subtract(1, 'days').format('LL'); 
    var sevenDays = [ dateTimeCheck0, dateTimeCheck1, dateTimeCheck2, dateTimeCheck3, dateTimeCheck4];
    var sevenDayEmo = [ dailyEmotionCheck0, dailyEmotionCheck1, dailyEmotionCheck2, dailyEmotionCheck3, dailyEmotionCheck4];
    var id = 0
    

    for (let i = 0; i < sevenDays.length; i++) {


        if(sevenDayEmo[i] == null) {
            console.log("end")
    
        }else {
            $("#date" + i ).html("<h5>" + sevenDays[i]+ ": " +  sevenDayEmo[i] + "</h5>");
            
        }
    }
        