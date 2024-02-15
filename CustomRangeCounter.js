let fromUserInputE1 = document.getElementById("fromUserInput");
let toUserInputE1 = document.getElementById("toUserInput");
let startBtnE1 = document.getElementById("startBtn");
let counterTextE1 = document.getElementById("counterText");

function startCounter() {
    let fromUserInputValue = fromUserInputE1.value;
    let toUserInputValue = toUserInputE1.value;
    if (fromUserInputValue > toUserInputValue) {
        return;
    }
    if (fromUserInputValue === "") {
        alert("Please enter from value");
    } else if (toUserInputValue === "") {
        alert("Please enter to value");
    } else {
        let counter = parseInt(fromUserInputValue);
        counterTextE1.textContent = counter;
        let uniqueId = setInterval(function() {
            counter += 1;
            counterTextE1.textContent = counter;
            if (counter === parseInt(toUserInputValue)) {
                clearInterval(uniqueId);
            }
        }, 1000);

    }
}

startBtnE1.addEventListener("click", startCounter);