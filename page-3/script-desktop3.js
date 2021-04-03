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
yoga2.addEventListener("click", clickedOne);
yoga3.addEventListener("click", clickedTwo);
yoga4.addEventListener("click", clickedThree);
yoga5.addEventListener("click", clickedFour);
yoga6.addEventListener("click", clickedFive);

function clicked() {
  console.log("i was clicked");
  startTimer();
}

function clickedOne() {
  startTimerOne();
}

function clickedTwo() {
  startTimerTwo();
}

function clickedThree() {
  startTimerThree();
}

function clickedFour() {
  startTimerFour();
}
function clickedFive() {
  startTimerFive();
}


function startTimer() {
  var timers = document.querySelectorAll(".timer");
var secondsLeft = [30,30,30,30,30,30];
  var timer = setInterval(function() {  
    
    secondsLeft[0]--;
    timers[0].textContent = secondsLeft[0];
    if (secondsLeft[0] === 0) {
        clearInterval(timer);
    };
  
  }, 1000);

}

function startTimerOne() {
  var timers = document.querySelectorAll(".timer");
var secondsLeft = [30,30,30,30,30,30];
  var timer = setInterval(function() {  
    
    secondsLeft[1]--;
    timers[1].textContent = secondsLeft[1];
    if (secondsLeft[1] === 0) {
        clearInterval(timer);
    };
  
  }, 1000);

}

function startTimerTwo() {
  var timers = document.querySelectorAll(".timer");
var secondsLeft = [30,30,30,30,30,30];
  var timer = setInterval(function() {  
    
    secondsLeft[2]--;
    timers[2].textContent = secondsLeft[2];
    if (secondsLeft[2] === 0) {
        clearInterval(timer);
    };
  
  }, 1000);

}

function startTimerThree() {
  var timers = document.querySelectorAll(".timer");
var secondsLeft = [30,30,30,30,30,30];
  var timer = setInterval(function() {  
    
    secondsLeft[3]--;
    timers[3].textContent = secondsLeft[3];
    if (secondsLeft[3] === 0) {
        clearInterval(timer);
    };
  
  }, 1000);

}

function startTimerFour() {
  var timers = document.querySelectorAll(".timer");
var secondsLeft = [30,30,30,30,30,30];
  var timer = setInterval(function() {  
    
    secondsLeft[4]--;
    timers[4].textContent = secondsLeft[4];
    if (secondsLeft[4] === 0) {
        clearInterval(timer);
    };
  
  }, 1000);

}

function startTimerFive() {
  var timers = document.querySelectorAll(".timer");
var secondsLeft = [30,30,30,30,30,30];
  var timer = setInterval(function() {  
    
    secondsLeft[5]--;
    timers[5].textContent = secondsLeft[5];
    if (secondsLeft[5] === 0) {
        clearInterval(timer);
    };
  
  }, 1000);

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

    // 2. This code loads the IFrame Player API code asynchronously.
    
    var musicIDs = ['EpAyaAyWl-M','79kpoGF8KWU','77YwsoKsNV8','GA9GigGuf24','wuLKvcn-c7A','neV3EPgvZ3g', 'WhgKyIxjHNo'];
    var videoIDs = musicIDs[Math.floor(Math.random()*musicIDs.length)];
    console.log(videoIDs);
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
        videoId: videoIDs,
        events: {
          'onReady': onPlayerReady
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

