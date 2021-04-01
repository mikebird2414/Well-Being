

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
                x: new Date(info[i].date),
                y: info[i].units
            });
        }
        $("#chartContainer").CanvasJSChart(options);
    }
    $.getJSON("https://canvasjs.com/data/gallery/jquery/daily-sales-data.json", addData);
}
var tomorrow = 1617155500000 + 86400;
var nextday = 1617155500002 + 172800;
var info = [
    {
        "date": 1617155500000,
        "units": 2
    },
    {
        "date": 0,
        "units": 2
    },
    {
        "date": 4,
        "units": 3
    },
    {
        "date": (1617155500003 + 25920),
        "units": 4
    },
    {
        "date": 1617155500004,
        "units": 4
    },
]