console.log("script is linked");

var testBtn = document.querySelector("#yoga3");
var quote = document.querySelector("#quote")

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

  testBtn.addEventListener("click", testFunction)

  function testFunction() {
    console.log("i was clicked");
  }
  