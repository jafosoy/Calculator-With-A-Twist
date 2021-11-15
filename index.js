var currentEquation = "";
var actualEquation = [];
var previousAnswer = "";
var previousEquation = "";
var answer;

function clear() {
    currentEquation = "";
    previousAnswer = "";
    previousEquation = "";
    actualEquation = [];
    answer = 0;
    $(".displayText").text("");
}

$(".append-to").click(function () {
    currentEquation += this.innerHTML;
    actualEquation.push(this.innerHTML);
    $(".displayText").text(""+currentEquation);

});

$(".custom-button").click(function () {
    if ($(this).attr("id") == "ce") {
        clear();
    } else {
        processAnswer();
    }
});


function hypotenuse(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
}

function processAnswer() {
    var ans = 0;
    var temp = "";
    var currOp = "";
    var secondString;
    

    for (var i =0; i < actualEquation.length; i++) {
        if (!isNaN(actualEquation[i])) {
            temp += actualEquation[i];
        } else if (currOp == "") {
            ans = parseInt(temp);
            temp = "";
            currOp = actualEquation[i];
        } else {
            ans = operators[currOp](ans, parseInt(temp));
            temp = "";
            currOp = actualEquation[i];
        }
    }

    ans = operators[currOp](ans, parseInt(temp));

    $(".displayText").text(ans);
    $(".prevText").text(previousAnswer);
    previousAnswer = ans;
    currentEquation = "";
    actualEquation = [];
    
}

// simple StringtoOperator 
var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '/': function (a, b) { return a / b },
    'x': function (a, b) { return a * b },
};