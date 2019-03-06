function graphPlot() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Line Graph"
        },
        toolTip: {
            shared: true
        },
        axisX: {
            title: "X axis",
            gridThickness: 0
        },
        axisY: {
            title: "Y axis",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            gridThickness: 0
        },
        toolTip: {
            content: "  ({x},{y})"
        },
        data: [{
            type: "spline",
            dataPoints: [{
                    x: x1,
                    y: y1
                },
                {
                    x: x2,
                    y: y2
                },
                {
                    x: x3,
                    y: y3
                },
                {
                    x: x4,
                    y: y4
                },
                {
                    x: x5,
                    y: y5
                },
                {
                    x: x6,
                    y: y6
                },
            ]
        }]
    });
    chart.render();
}