function play(option) {
    let pOption = option;
    let cOption = Math.floor(Math.random() * 3 + 1);

    document.getElementById('c-img').src = "";
    document.getElementById('result').innerHTML = " . . .";

    let wins = sessionStorage.getItem("winCount");
    let ties = sessionStorage.getItem("tieCount");
    let losses = sessionStorage.getItem("lossCount");

    if (wins == null) {
        wins = 0;
    } else {
        wins = wins;
    };
    if (ties == null) {
        ties = 0;
    } else {
        ties = ties;
    };
    if (losses = null) {
        losses = 0;
    } else {
        losses = losses;
    };

    setTimeout(() => {
        if (pOption === 1 && cOption === "rock") {
            document.getElementById('c-img').src = "images/rock.png";
            document.getElementById('result').innerHTML = "rock TIES rock";
            ++ties;
        } else if (pOption === 1 && cOption === "scissors") {
            document.getElementById('c-img').src = "images/rock.png";
            document.getElementById('result').innerHTML = "scissors LOSES to rock";
            ++losses;
        } else if (pOption === 1 && cOption === "paper") {
            document.getElementById('c-img').src = "images/rock.png";
            document.getElementById('result').innerHTML = "Paper BEATS rock";
            ++wins;
        } else if (pOption === 1 && cOption === "rock") {
            document.getElementById('c-img').src = "images/paper.png";
            document.getElementById('result').innerHTML = "Rock LOSES to paper";
            ++losses;
        } else if (pOption === 1 && cOption === "paper") {
            document.getElementById('c-img').src = "images/paper.png";
            document.getElementById('result').innerHTML = "Paper TIES paper";
            ++ties;
        } else if (pOption === 1 && cOption === "scissors") {
            document.getElementById('c-img').src = "imgages/paper.png";
            document.getElementById('result').innerHTML = "Scissors BEATS paper";
            ++wins;
        } else if (pOption === 1 && cOption === "rock") {
            document.getElementById('c-img').src = "images/scissors.png";
            document.getElementById('result').innerHTML = "Rock BEATS scissors";
            ++wins;
        } else if (pOption === 1 && cOption === "paper") {
            document.getElementById('c-img').src = "images/scissors.png";
            document.getElementById('result').innerHTML = "Paper LOSES to scissors";
            ++losses;
        } else {
            document.getElementById('c-img').src = "images/scissors.png";
            document.getElementById('result').innerHTML = "Scissors TIES scissors";
            ++ties;
        }

        sessionStorage.setItem("winCount", wins);
        sessionStorage.setItem("tieCount", ties);
        sessionStorage.setItem("lossCount", losses);
        document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
        document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
        document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
      }, 200); 
}

function reset() {
    sessionStorage.setItem("winCount", 0);
    sessionStorage.setItem("tieCount", 0);
    sessionStorage.setItem("lossCount", 0);
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('c-img').src = "images/que.png";
    document.getElementById('result').innerHTML = "Result";
}