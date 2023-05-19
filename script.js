//NUM ONE

let startBtn = document.getElementById('start1');
let stopBtn = document.getElementById('stop1');

let minute = 00;
let second = 00;
let count = 00;
 
startBtn.addEventListener('click', function () {
    timer1 = true;
    stopWatchOne();
});
 
stopBtn.addEventListener('click', function () {
    timer1 = false;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min1').innerHTML = "00";
    document.getElementById('sec1').innerHTML = "00";
});
 
function stopWatchOne() {
    if (timer1) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            minute = 0;
            second = 0;
        }
 
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
 
        document.getElementById('min1').innerHTML = minString;
        document.getElementById('sec1').innerHTML = secString;
        setTimeout(stopWatchOne, 10);
    }
}


//NUM TWO

let startBtn2 = document.getElementById('start2');
let stopBtn2 = document.getElementById('stop2');

let minute2 = 00;
let second2 = 00;
let count2 = 00;
 
startBtn2.addEventListener('click', function () {
    timer2 = true;
    stopWatchTwo();
});
 
stopBtn2.addEventListener('click', function () {
    timer2 = false;
    minute2 = 0;
    second2 = 0;
    count2 = 0;
    document.getElementById('min2').innerHTML = "00";
    document.getElementById('sec2').innerHTML = "00";
});
 
function stopWatchTwo() {
    if (timer2) {
        count2++;
 
        if (count2 == 100) {
            second2++;
            count2 = 0;
        }
 
        if (second2 == 60) {
            minute2++;
            second2 = 0;
        }
 
        if (minute2 == 60) {
            minute2 = 0;
            second2 = 0;
        }
 
        let minString2 = minute2;
        let secString2 = second2;
        let countString2 = count2;
 
        if (minute2 < 10) {
            minString2 = "0" + minString2;
        }
 
        if (second2 < 10) {
            secString2 = "0" + secString2;
        }
 
        if (count2 < 10) {
            countString2 = "0" + countString2;
        }
 
        document.getElementById('min2').innerHTML = minString2;
        document.getElementById('sec2').innerHTML = secString2;
        setTimeout(stopWatchTwo, 10);
    }
}

//NUM THREE

let startBtn3 = document.getElementById('start3');
let stopBtn3 = document.getElementById('stop3');

let minute3 = 00;
let second3 = 00;
let count3 = 00;
 
startBtn3.addEventListener('click', function () {
    timer3 = true;
    stopWatchThree();
});
 
stopBtn3.addEventListener('click', function () {
    timer3 = false;
    minute3 = 0;
    second3 = 0;
    count3 = 0;
    document.getElementById('min3').innerHTML = "00";
    document.getElementById('sec3').innerHTML = "00";
});
 
function stopWatchThree() {
    if (timer3) {
        count3++;
 
        if (count3 == 100) {
            second3++;
            count3 = 0;
        }
 
        if (second3 == 60) {
            minute3++;
            second3 = 0;
        }
 
        if (minute3 == 60) {
            minute3 = 0;
            second3 = 0;
        }
 
        let minString3 = minute3;
        let secString3 = second3;
        let countString3 = count3;
 
        if (minute3 < 10) {
            minString3 = "0" + minString3;
        }
 
        if (second3 < 10) {
            secString3 = "0" + secString3;
        }
 
        if (count3 < 10) {
            countString3 = "0" + countString3;
        }
 
        document.getElementById('min3').innerHTML = minString3;
        document.getElementById('sec3').innerHTML = secString3;
        setTimeout(stopWatchThree, 10);
    }
}

//NUM FOUR

let startBtn4 = document.getElementById('start4');
let stopBtn4 = document.getElementById('stop4');

let minute4 = 00;
let second4 = 00;
let count4 = 00;
 
startBtn4.addEventListener('click', function () {
    timer4 = true;
    stopWatchFour();
});
 
stopBtn4.addEventListener('click', function () {
    timer4 = false;
    minute4 = 0;
    second4 = 0;
    count4 = 0;
    document.getElementById('min4').innerHTML = "00";
    document.getElementById('sec4').innerHTML = "00";
});
 
function stopWatchFour() {
    if (timer4) {
        count4++;
 
        if (count4 == 100) {
            second4++;
            count4 = 0;
        }
 
        if (second4 == 60) {
            minute4++;
            second4 = 0;
        }
 
        if (minute4 == 60) {
            minute4 = 0;
            second4 = 0;
        }
 
        let minString4 = minute4;
        let secString4 = second4;
        let countString4 = count4;
 
        if (minute4 < 10) {
            minString4 = "0" + minString4;
        }
 
        if (second4 < 10) {
            secString4 = "0" + secString4;
        }
 
        if (count4 < 10) {
            countString4 = "0" + countString4;
        }
 
        document.getElementById('min4').innerHTML = minString4;
        document.getElementById('sec4').innerHTML = secString4;
        setTimeout(stopWatchFour, 10);
    }
}

//NUM FIVE

let startBtn5 = document.getElementById('start5');
let stopBtn5 = document.getElementById('stop5');

let minute5 = 00;
let second5 = 00;
let count5 = 00;
 
startBtn5.addEventListener('click', function () {
    timer5 = true;
    stopWatchFive();
});
 
stopBtn5.addEventListener('click', function () {
    timer5 = false;
    minute5 = 0;
    second5 = 0;
    count5 = 0;
    document.getElementById('min5').innerHTML = "00";
    document.getElementById('sec5').innerHTML = "00";
});
 
function stopWatchFive() {
    if (timer5) {
        count5++;
 
        if (count5 == 100) {
            second5++;
            count5 = 0;
        }
 
        if (second5 == 60) {
            minute5++;
            second5 = 0;
        }
 
        if (minute5 == 60) {
            minute5 = 0;
            second5 = 0;
        }
 
        let minString5 = minute5;
        let secString5 = second5;
        let countString5 = count5;
 
        if (minute5 < 10) {
            minString5 = "0" + minString5;
        }
 
        if (second5 < 10) {
            secString5 = "0" + secString5;
        }
 
        if (count5 < 10) {
            countString5 = "0" + countString5;
        }
 
        document.getElementById('min5').innerHTML = minString5;
        document.getElementById('sec5').innerHTML = secString5;
        setTimeout(stopWatchFive, 10);
    }
}


//Other buttons

let stopBtnAll = document.getElementById('stopALL');

stopBtnAll.addEventListener('click', function(){
    timer1 = false
    timer2 = false
    timer3 = false
    timer4 = false
    timer5 = false

    minute5 = 00;
    second5 = 00;
    count5 = 00;
    document.getElementById('min5').innerHTML = "00";
    document.getElementById('sec5').innerHTML = "00";

    minute4 = 00;
    second4 = 00;
    count4 = 00;
    document.getElementById('min4').innerHTML = "00";
    document.getElementById('sec4').innerHTML = "00";

    minute3 = 00;
    second3 = 00;
    count3 = 00;
    document.getElementById('min3').innerHTML = "00";
    document.getElementById('sec3').innerHTML = "00";

    minute2 = 00;
    second2 = 00;
    count2 = 00;
    document.getElementById('min2').innerHTML = "00";
    document.getElementById('sec2').innerHTML = "00";

    minute1 = 00;
    second1 = 00;
    count1 = 00;
    document.getElementById('min1').innerHTML = "00";
    document.getElementById('sec1').innerHTML = "00";
})