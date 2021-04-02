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



  

window.onload = function () {

    

    var data = [
	{ ProfileName: "Happy", TotalCustomer: x },
    { ProfileName: "Content", TotalCustomer: 22 },
    { ProfileName: "Angry", TotalCustomer: 33 },
    { ProfileName: "Sad", TotalCustomer: 44 }
    ];

var dps=[];
$.each(data, function (i, item) {
    dps.push({label: item.ProfileName, y: Number(item.TotalCustomer) });
    //alert(dps[0]);
});

var chart = new CanvasJS.Chart("chartContainer",
	{        
      data: [
      {
        type: "column",
        dataPoints: dps
      }
      ]
    });

 chart.render();



    const dateCurrent = moment().format("L");

console.log("------");
console.log(dateCurrent);
var x = localStorage.getItem(dateCurrent);
console.log(x);
    



    }
    // dailyEmotion = localStorage.getItem("04/01/2021");
    // console.log(dailyEmotion);


