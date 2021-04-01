console.log("script is linked");


var yoga1 = document.querySelector("#yoga1")
var yoga2 = document.querySelector("#yoga2");
var yoga3 = document.querySelector("#yoga3");
var yoga4 = document.querySelector("#yoga4");
var yoga5 = document.querySelector("#yoga5");
var yoga6 = document.querySelector("#yoga6");





var quote = document.querySelector("#quote")
var playBtn = document.querySelector("#play");
var playBtn2 = document.querySelector("#pause");
var player = document.querySelector("#player");

yoga1.addEventListener("click", clicked);
yoga2.addEventListener("click", clicked);
yoga3.addEventListener("click", clicked);
yoga4.addEventListener("click", clicked);
yoga5.addEventListener("click", clicked);
yoga6.addEventListener("click", clicked);

function clicked() {
  console.log("i was clicked");
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

  // type="text/javascript">
  //       window.onload = function () {
  //           var chart = new CanvasJS.Chart("chartContainer",{
  //               title:{
  //                   text: "Line Chart with Logarithmic X Axis"
  //               },
  //               axisX:{
  //                   title: "Logarithmic Axis",
  //                     logarithmic: true
  //               },
  //               data: [{
  //                   type: "line",
  //                   dataPoints: [
  //                       { x: 1, y: 71 },
  //                       { x: 2, y: 55 },
  //                       { x: 3, y: 50 },
  //                       { x: 4, y: 65 },
  //                       { x: 5, y: 95 },
  //                       { x: 6, y: 68 },
  //                       { x: 7, y: 28 },
  //                       { x: 8, y: 34 },
  //                       { x: 9, y: 14 }
  //                      ]
  //               }]
  //           });
  //           chart.render();
  //       }
  
        // playBtn.addEventListener("click", playMusic);

        // function playMusic() {
        //   src="https://www.zenradio.com/zen" autostart="true"
        //   fetch()
        // }

        // var unirest = require("unirest");


// function playMusic() {
//   console.log("i was clicked");
//   const settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://musicapp8.p.rapidapi.com/?q=test",
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "6098ddedcfmshee6bd61bb3fb3efp19e14djsn2cc983ee2171",
//       "x-rapidapi-host": "musicapp8.p.rapidapi.com"
//     }
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
// }

// window.onload = function() {
        
//   var dataPoints = [];
  
//   var options =  {
//       animationEnabled: true,
//       theme: "light2",
//       title: {
//           text: "Daily Sales Data"
//       },
//       axisX: {
//           valueFormatString: "DD MMM YYYY",
//       },
//       axisY: {
//           title: "USD",
//           titleFontSize: 24
//       },
//       data: [{
//           type: "spline", 
//           yValueFormatString: "$#,###.##",
//           dataPoints: dataPoints
//       }]
//   };
  
//   function addData() {
//       for (var i = 0; i < info.length; i++) {
//           dataPoints.push({
//               x: new Date(info[i].date),
//               y: info[i].units
//           });
//       }
//       $("#chartContainer").CanvasJSChart(options);
  
//   }
//   $.getJSON("https://canvasjs.com/data/gallery/jquery/daily-sales-data.json", addData);
  
//   }

// var info = [
//   {
//      "date":1617155500000,
//      "units":1
//   },
//   {
//      "date":12,
//      "units":2
//   },
//   {
//      "date":123,
//      "units":3
//   },
//   {
//      "date":(1617155500003 + 259200),
//      "units":4
//   },
//   {
//      "date":1617155500004,
//      "units":4
//   },
// ];

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'EpAyaAyWl-M',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    playBtn.addEventListener("click", stopVideo);

    playBtn2.addEventListener("click", onPlayerReady);
    

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady() {
      player.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.pauseVideo();
    }

    player.setAttribute("style","display:none");

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })

