var body = $(".body");

// Displays current date at header
const dateTime = moment().format("L");
$("#currentDay").html(dateTime);

$(document).ready(function () {
  $(".emojiButton").click(function () {
    var date = $(this).parent().attr("id");
    var emotion = $(this).siblings(".desc").html();
    window.location.href = './main-page/mainpage.html';

    date = dateTime;

    localStorage.setItem(date, emotion);
    console.log("thanks");
  });
});

var images = [],
  index = 0;

images[0] = "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg",
  images[1] = "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg",
  images[2] = "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_960_720.jpg",
  images[3] = "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg"
images[4] = "https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg",
  images[5] = "https://cdn.pixabay.com/photo/2020/05/28/03/38/canyon-5229681_960_720.jpg",

  index = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = "url('" + images[index] + "')";