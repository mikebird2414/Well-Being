document.getElementById("message").innerHTML = localStorage.getItem("today");

var messageInput = document.querySelector("#message");
var saveBtn = document.querySelector("#saveBtn");
var quote = document.querySelector("#quote");


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

console.log(today);

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

window.onload = function () {

    var options = {
        animationEnabled: true,
        title:{
            text: "Weekly Emotional Range"
        },
        axisX:{
            valueFormatString: "DD MMM YYYY",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Emotion Range",
            valueFormatString: "0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return "" + CanvasJS.formatNumber(e.value, "##0");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM YYYY",
            yValueFormatString: "0",
            dataPoints: [
                { x: new Date(2021, 03, 01), y: 4 },
                { x: new Date(2021, 03, 04), y: 5 },
                { x: new Date(2021, 03, 05), y: 3 },
                { x: new Date(2021, 03, 06), y: 4 },
                { x: new Date(2021, 03, 07), y: 5},
                { x: new Date(2021, 03, 08), y: 5 },
                { x: new Date(2021, 03, 09), y: 2 },

            ]
        }]
    };
    
    $("#chartContainer").CanvasJSChart(options);
    
    }
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




    



    
