document.getElementById("message").innerHTML = localStorage.getItem("today");

var messageInput = document.querySelector("#message");
var saveBtn = document.querySelector("#saveBtn");
var quote = document.querySelector("#quote");

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






// window.onload = function () {
//     var dataPoints = [];
//     var options = {
//         animationEnabled: true,
//         theme: "light2",
//         title: {
//             text: "Weekly emotion check"
//         },
//         axisX: {
//             valueFormatString: "DD MMM YYYY",
//         },
//         axisY: {
//             title: "USD",
//             titleFontSize: 2
//         },
//         data: [{
//             type: "spline",
//             yValueFormatString: "$#,###.##",
//             dataPoints: dataPoints
//         }]
//     };
    // addData();
//     function addData() {
//         for (var i = 0; i < info.length; i++) {
//             dataPoints.push({
//                 x: (info[i].date),
//                 y: info[i].units
//             });
//         }
//         $("#chartContainer").CanvasJSChart(options);
//     }
//     $.getJSON("https://canvasjs.com/data/gallery/jquery/daily-sales-data.json", addData);
// }

// var info = [
//     {
//         "date": 1,
//         "units": 5
//     },
//     {
//         "date": 2,
//         "units": 2
//     },
//     {
//         "date": 3,
//         "units": 3
//     },
//     {
//         "date": 4,
//         "units": 4
//     },
//     {
//         "date": 5,
//         "units": 4
//     },
// ]

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
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
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
