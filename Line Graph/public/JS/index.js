let x_Axes = [-2, -1, 0, 1, 2, 3];
let y_Axes = [];
let x1 = x_Axes[0];
let x2 = x_Axes[1];
let x3 = x_Axes[2];
let x4 = x_Axes[3];
let x5 = x_Axes[4];
let x6 = x_Axes[5];


let y1 = null;
let y2 = null;

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click', plotGraph);

function isNumber(event) {
    let charCode = event.keyCode;
    if(charCode === 45) {
        return true;
    }
    else if ((charCode < 48 || charCode > 57 )) {
        return false;
    }
    return true;
}

function plotGraph(event) {
    event.preventDefault();
    const slope = parseInt(inputs[0].value);
    const constant = parseInt(inputs[1].value);
    y_Axes = [];
    if ((slope !== "") && (constant !== "")) {
        x_Axes.map((axis) => {
            let y = (slope * axis) + constant;
            y_Axes.push(y);
        });
        y1 = y_Axes[0];
        y2 = y_Axes[1];
        y3 = y_Axes[2];
        y4 = y_Axes[3];
        y5 = y_Axes[4];
        y6 = y_Axes[5];

        graphPlot();
    } else {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    }
}

function Ondragging() {
    if ($('.graph-div').hasClass('ui-draggable-dragging')) {
        $(document.body).addClass("add-border");
    }
}

setInterval(onDragLeave, 500);

function onDragLeave(event) {
    if ($('.graph-div').hasClass('ui-draggable-dragging') === false) {
        $(document.body).removeClass("add-border");
    }
}