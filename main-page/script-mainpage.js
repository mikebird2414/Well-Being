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
        

   
    
 
    
    
 







    



    
