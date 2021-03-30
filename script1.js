var body = $(".body");

// Displays current date at header
const dateTime = moment().format("L");
$("#currentDay").html(dateTime);

$(document).ready(function () {
  $(".emojiButton").click(function () {
    var date = $(this).parent().attr("id");
    var emotion = $(this).siblings(".desc").html();

    date = dateTime;

    localStorage.setItem(date, emotion);
    console.log("thanks");
  });
});

var backgroundPic = [
  "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/05/28/03/38/canyon-5229681_960_720.jpg",
];



$(document).ready(function () {
  var picNum = Math.floor(Math.random() * backgroundPic.length + 1);
  var newPic = backgroundPic[picNum];
  body.css({ "background-image": newPic });
});
