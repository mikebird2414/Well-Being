
var messageInput = document.querySelector("#message");
var saveBtn = document.querySelector("#saveBtn");
var quote = document.querySelector("#quote");
var clearBtn = document.querySelector("#clear");


var emoteSpot1 = document.querySelector("#dayOne");
var emoteSpot2 = document.querySelector("#dayTwo");
var emoteSpot3 = document.querySelector("#dayThree");
var emoteSpot4 = document.querySelector("#dayFour");
var emoteSpot4 = document.querySelector("#dayFive");
var emoteSpot4 = document.querySelector("#daySix");
var emoteSpot4 = document.querySelector("#daySeven");


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd;

document.getElementById("message").value = localStorage.getItem(today);

console.log(today);

saveBtn.addEventListener("click", setDailyStorage);
clearBtn.addEventListener("click", clearMessage)

function setDailyStorage() {
    var dailyDiary = messageInput.value;
localStorage.setItem(today, dailyDiary);
}

function clearMessage() {
    messageInput.value = "";
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


    dailyEmotion = localStorage.getItem("04/01/2021");
    console.log(dailyEmotion);






    var currentDay = new Date();
    console.log(currentDay);

    var currentDayD = currentDay.getDate();
    console.log(currentDayD);

    var currentDayM = currentDay.getMonth() + 1;
    console.log(currentDayM)

    var currrentDayY = currentDay.getFullYear();

    var dayOne = "0" + currentDayM + "/" + "0" + currentDayD + "/" + currrentDayY;
    console.log(dayOne);

    dayOneEmotion = localStorage.getItem(dayOne);
    console.log(dayOneEmotion);

    emoteSpot1.innerHTML = dayOne + " " + dayOneEmotion;



    var minusOne = new Date(currentDay);

    minusOne.setDate(minusOne.getDate() - 1);

    console.log(minusOne);
    
    var minusOneD = minusOne.getDate();
    console.log(minusOneD);

    var minusOneM = minusOne.getMonth() + 1;
    console.log(minusOneM);


    var minusOneY = minusOne.getFullYear();

    var dayTwo = "0" + minusOneM + "/" + "0" + minusOneD + "/" + minusOneY;
    console.log(dayOne);

    dayTwoEmotion = localStorage.getItem(dayTwo);
    console.log(dayTwoEmotion);

    emoteSpot2.innerHTML = dayTwo + " " + dayTwoEmotion;


    



    var minusTwo = new Date(minusOne);

    minusTwo.setDate(minusTwo.getDate() -1);

    console.log(minusTwo);


    var minusThree = new Date(minusTwo);

    minusThree.setDate(minusThree.getDate() -1);

    console.log(minusThree);


    var minusFour = new Date(minusThree);

    minusFour.setDate(minusFour.getDate() -1);

    console.log(minusFour);

// var number = localStorage.getItem(dayOne)

    let sevenDays = [
        {
          "date": number = localStorage.getItem(dayOne),
          "emotion": 2,
        },
        {
            "date": 1,
            "emotion": 2,
        
        },


    ]
    console.log(sevenDays);
