document.getElementById("message").innerHTML = localStorage.getItem("today");

var messageInput = document.querySelector("#message");
var saveBtn = document.querySelector("#saveBtn");
var quote = document.querySelector("#quote")

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd;

console.log(today);

saveBtn.addEventListener("click", setDiaryStorage);

function setDiaryStorage() {
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
    var dataPoints = [];
    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Weekly emotion check"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY",
        },
        axisY: {
            title: "USD",
            titleFontSize: 2
        },
        data: [{
            type: "spline",
            yValueFormatString: "$#,###.##",
            dataPoints: dataPoints
        }]
    };
    // addData();
    function addData() {
        for (var i = 0; i < info.length; i++) {
            dataPoints.push({
                x: (info[i].date),
                y: info[i].units
            });
        }
        $("#chartContainer").CanvasJSChart(options);
    }
    $.getJSON("https://canvasjs.com/data/gallery/jquery/daily-sales-data.json", addData);
}

var info = [
    {
        "date": 1,
        "units": 5
    },
    {
        "date": 2,
        "units": 2
    },
    {
        "date": 3,
        "units": 3
    },
    {
        "date": 4,
        "units": 4
    },
    {
        "date": 5,
        "units": 4
    },
]

