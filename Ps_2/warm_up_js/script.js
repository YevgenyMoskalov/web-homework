document.getElementById('but').addEventListener('click', sumCalculation);
document.getElementById('second-convert').addEventListener('click',conversion);
document.getElementById('time-convert').addEventListener('click', reconversion);
document.getElementById('calc').addEventListener('click',getTimeDifference);
document.getElementById('render').addEventListener('click', render);
document.getElementById('date').addEventListener('onfocusout',sortUrlAndIp);
document.getElementById('but2').addEventListener('click',markText);

function sumCalculation() {
    const lastNum = document.getElementById("second-number").value;
    let sum = 0;
    let number = document.getElementById("first-number").value;
    const regex = RegExp('(2$)|(3$)|(7$)');
    if (regex.test(number)) {
        sum += +number
    }
    while (number !== lastNum) {
        number++;
        number += "";
        if (regex.test(number)) {
            sum += +number
        }
    }
    document.getElementById("result").innerText = sum;
}

function conversion() {
    let numberOfSeconds = document.getElementById("second-ss").value;
    const seconds = numberOfSeconds % 60;
    numberOfSeconds -= seconds;
    numberOfSeconds /= 60;
    const minutes = Math.floor(numberOfSeconds % 60);
    numberOfSeconds -= minutes;
    const hours = numberOfSeconds / 60;
    document.getElementById("conversion-result").innerText = hours + ":" + minutes + ":" + seconds;
}

function reconversion() {
    let time = document.getElementById("time").value;
    let pattern = /^\d+:\d+:\d+$/;
    if (time.match(pattern)) {
        time = time.split(":");
        document.getElementById("reconversion-result").innerText = time[0] * 3600 + time[1] * 60 + +time[2];
    } else {
        alert("I said! \n hh:mm:ss");
    }
}

function getTimeDifference() {
    const first = new Date(document.getElementById("first-date").value);
    const second = new Date(document.getElementById("second-date").value);
    let diff;

    if (first > second) {
        diff = new Date(first.getTime() - second.getTime());
    } else {
        diff = new Date(second.getTime() - first.getTime());
    }

    const y = diff.getUTCFullYear() - 1970;
    const m = diff.getUTCMonth();
    const d = diff.getUTCDate() - 1;
    const h = diff.getUTCHours();
    const min = diff.getUTCMinutes();
    const s = diff.getUTCSeconds();

    document.getElementById('time-difference').innerText = y + " year(s), " + m + " month(s), "
        + d + " day(s), " + h + " hour(s)," + min + " minute(s), " + s + " second(s).";
}

function render() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let flag = true;
    let chessBoard = document.getElementById("bord");
    chessBoard.innerText = "";
    for (let i = 0; i < height; i++) {
        let block = document.createElement("div");
        block.className = 'block';
        chessBoard.appendChild(block);
        for (let j = 0; j < width; j++) {
            let square = document.createElement("div");
            if (flag) {
                square.className = 'square black';
            } else {
                square.className = 'square white';
            }
            flag = !flag;
            block.appendChild(square);
        }
        if (width % 2 === 0) {
            flag = !flag;
        }
    }
}

function sortUrlAndIp() {
    const firstPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    const secondPattern = "(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?";
    const newSecondPattern = "([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?";
    let textarea = document.getElementById("date").value;
    let newArea = [];
    textarea = textarea.split(",");
    for (let i = 0; i < textarea.length; i++) {
        if (textarea[i].match(secondPattern)) {
            newArea.push(textarea[i].match(newSecondPattern)[0]);
        } else if (textarea[i].match(firstPattern)) {
            newArea.push(textarea[i]);
        }
    }

    let output = document.getElementById("outputURL");
    output.innerText = "";

    for (let i = 0; i < newArea.length; i++) {
        let newLink = document.createElement("a");
        newLink.className = "link";
        newLink.innerText = newArea[i];
        newLink.href = "http://" + newArea[i];
        newLink.target = "_blank";
        output.appendChild(newLink);
    }
}

function markText() {
    let string = document.getElementById("regularExpressionsTest-data").value;
    let regex = document.getElementById("regex").value;
    console.log(new RegExp(regex, 'gi'));
    string = string.replace(new RegExp(regex, 'g'), '<mark>' + '$&' + '</mark>');
    document.getElementById("newTextarea").innerHTML = string;
}