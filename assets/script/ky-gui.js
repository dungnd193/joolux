// Show and Hide Check First, Second, Third checked
function showCheckedFirst() {
    document.getElementById("ky-gui__register-order-checked--first").style.display = 'block';
}

function hideCheckedFirst() {
    document.getElementById("ky-gui__register-order-checked--first").style.display = 'none';
}

function showCheckedSecond() {
    document.getElementById("ky-gui__register-order-checked--second").style.display = 'block';
}

function hideCheckedSecond() {
    document.getElementById("ky-gui__register-order-checked--second").style.display = 'none';
}

function showCheckedThird() {
    document.getElementById("ky-gui__register-order-checked--third").style.display = 'block';
}

function hideCheckedThird() {
    document.getElementById("ky-gui__register-order-checked--third").style.display = 'none';
}


function checkStep1() {
    showCheckedFirst()
    document.getElementById("ky-gui__register-form--first").style.display = 'none';
    document.getElementById("ky-gui__register-line--checked-first-step").style.display = 'block';
    document.getElementById("ky-gui__register-form--second").style.display = 'block';
}

function backStep1() {
    hideCheckedFirst()
    document.getElementById("ky-gui__register-form--first").style.display = 'block';
    document.getElementById("ky-gui__register-line--checked-first-step").style.display = 'none';
    document.getElementById("ky-gui__register-form--second").style.display = 'none';
}

function checkStep2() {
    showCheckedSecond()
    document.getElementById("ky-gui__register-form--second").style.display = 'none';
    document.getElementById("ky-gui__register-line--checked-second-step").style.display = 'block';
    document.getElementById("ky-gui__register-form--third").style.display = 'block';
}

function backStep2() {
    hideCheckedSecond()
    document.getElementById("ky-gui__register-form--second").style.display = 'block';
    document.getElementById("ky-gui__register-line--checked-second-step").style.display = 'none';
    document.getElementById("ky-gui__register-form--third").style.display = 'none';
}

function hideRegisterInfo() {
    document.getElementById("ky-gui__register-info").style.display = 'none';
    document.getElementById("ky-gui__register-thanks").style.display = 'block'
}

// Show and Hide Ky Gui Answer
var buttonOpenAnswer1 = document.querySelector('.js-ky-gui__question-button-1');
var buttonOpenAnswer2 = document.querySelector('.js-ky-gui__question-button-2');
var buttonOpenAnswer3 = document.querySelector('.js-ky-gui__question-button-3');
var buttonOpenAnswer4 = document.querySelector('.js-ky-gui__question-button-4');
var buttonOpenAnswer5 = document.querySelector('.js-ky-gui__question-button-5');
var buttonOpenAnswer6 = document.querySelector('.js-ky-gui__question-button-6');

var answer1 = document.getElementById("ky-gui__answer-1");
var answer2 = document.getElementById("ky-gui__answer-2");
var answer3 = document.getElementById("ky-gui__answer-3");
var answer4 = document.getElementById("ky-gui__answer-4");
var answer5 = document.getElementById("ky-gui__answer-5");
var answer6 = document.getElementById("ky-gui__answer-6");

var iconQues1 = document.getElementById("ky-gui__question-icon-1");
var iconQues2 = document.getElementById("ky-gui__question-icon-2");
var iconQues3 = document.getElementById("ky-gui__question-icon-3");
var iconQues4 = document.getElementById("ky-gui__question-icon-4");
var iconQues5 = document.getElementById("ky-gui__question-icon-5");
var iconQues6 = document.getElementById("ky-gui__question-icon-6");

buttonOpenAnswer1.addEventListener('click',showAnwser1);
buttonOpenAnswer2.addEventListener('click',showAnwser2);
buttonOpenAnswer3.addEventListener('click',showAnwser3);
buttonOpenAnswer4.addEventListener('click',showAnwser4);
buttonOpenAnswer5.addEventListener('click',showAnwser5);
buttonOpenAnswer6.addEventListener('click',showAnwser6);

function showAnwser1() {
    if(answer1.className == "closed") {
        answer1.className = "opened"
    } else {
        answer1.className = "closed"
    }

    if(iconQues1.className == "plus") {
        iconQues1.className = "minus"
    } else {
        iconQues1.className = "plus"
    }
}
function showAnwser2() {
    if(answer2.className == "closed") {
        answer2.className = "opened"
    } else {
        answer2.className = "closed"
    }

    if(iconQues2.className == "plus") {
        iconQues2.className = "minus"
    } else {
        iconQues2.className = "plus"
    }
}
function showAnwser3() {
    if(answer3.className == "closed") {
        answer3.className = "opened"
    } else {
        answer3.className = "closed"
    }

    if(iconQues3.className == "plus") {
        iconQues3.className = "minus"
    } else {
        iconQues3.className = "plus"
    }
}
function showAnwser4() {
    if(answer4.className == "closed") {
        answer4.className = "opened"
    } else {
        answer4.className = "closed"
    }

    if(iconQues4.className == "plus") {
        iconQues4.className = "minus"
    } else {
        iconQues4.className = "plus"
    }
}
function showAnwser5() {
    if(answer5.className == "closed") {
        answer5.className = "opened"
    } else {
        answer5.className = "closed"
    }

    if(iconQues5.className == "plus") {
        iconQues5.className = "minus"
    } else {
        iconQues5.className = "plus"
    }
}
function showAnwser6() {
    if(answer6.className == "closed") {
        answer6.className = "opened"
    } else {
        answer6.className = "closed"
    }

    if(iconQues6.className == "plus") {
        iconQues6.className = "minus"
    } else {
        iconQues6.className = "plus"
    }
}
