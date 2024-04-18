let comp = parseInt(localStorage.getItem("comp_score")) || 0;
let user = parseInt(localStorage.getItem("your_score")) || 0;

yourRun.innerHTML = user;
compRun.innerHTML = comp;
let middledle_div = document.querySelector(".option");
let winnerner_div = document.querySelector(".win");
let looserr_div = document.querySelector(".loose");
let tie_match_div = document.querySelector(".tie");
let congratulations_div = document.querySelector(".celebration");
let head_div = document.querySelector(".title");

let div = document.querySelector(".rules");
let compRun = document.querySelector(".comp_Run");
let yourRun = document.querySelector(".your_Run");
let yourpick = document.querySelectorAll(".your_pick");
let comppick = document.querySelectorAll(".comp_pick");


function show(display) {
    if (display == 1) {
        div.style.display = "block";
    } else {
        {
            div.style.display = "none";
        }
    }
}

function match(choice) {
    let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log("r" + random);
    if (choice == 1 && random == 2) {
        user++;
        yourRun.innerHTML = user;
        let winnernerdiv =
            '<div class="rock "><img src="./images/rock.png"  /><P class="cword">YOU PICKED</P></div> ';
        let looserrdiv =
            '<div class="scissor "><img src="./images/scissor.png"  /><P class="cword">PC PICKED</P></div> ';
        comppick[0].innerHTML = looserrdiv;
        yourpick[0].innerHTML = winnernerdiv;
        middledle_div.style.display = "none";
        winnerner_div.style.display = "block";
        tie_match_div.style.display = "none";
        looserr_div.style.display = "none";

        localStorage.setItem("comp_score", comp);
        localStorage.setItem("your_score", user);
        console.log("YOU WIN");
    } else if (choice == 1 && random == 3) {
        comp++;
        compRun.innerHTML = comp;

        middledle_div.style.display = "none";
        winnerner_div.style.display = "none";
        looserr_div.style.display = "block";
        tie_match_div.style.display = "none";

        let looserrdiv =
            '<div class="rock "><img src="./images/rock.png"  /><P class="cword">YOU PICKED</P></div> ';
        let winnernerdiv =
            '<div class="paper "><img src="./images/paper.png"  /><P class="cword">PC PICKED</P></div> ';
        yourpick[1].innerHTML = looserrdiv;
        comppick[1].innerHTML = winnernerdiv;
        localStorage.setItem("comp_score", comp);
        localStorage.setItem("your_score", user);
        console.log("YOU LOOSE");
    } else if (choice == random) {
        middledle_div.style.display = "none";
        winnerner_div.style.display = "none";
        looserr_div.style.display = "none";
        tie_match_div.style.display = "block";
        if (choice == 1) {
            let yourChoice =
                '<div class="rock "><img src="./images/rock.png"  /><P class="cword">YOU PICKED</P></div>';
            let comp_Choice =
                '<div class="rock "><img src="./images/rock.png"  /><P class="cword">PC PICKED</P></div>';
            yourpick[2].innerHTML = yourChoice;
            comppick[2].innerHTML = comp_Choice;
        } else if (choice == 2) {
            let yourChoice =
                '<div class="scissor "><img src="./images/scissor.png"  /><P class="cword">YOU PICKED</P></div>';
            let comp_Choice =
                '<div class="scissor "><img src="./images/scissor.png"  /><P class="cword">PC PICKED</P></div>';
            yourpick[2].innerHTML = yourChoice;
            comppick[2].innerHTML = comp_Choice;
        } else if (choice == 3) {
            let yourChoice =
                '<div class="paper "><img src="./images/paper.png"  /><P class="cword">YOU PICKED</P></div>';
            let comp_Choice =
                '<div class="paper "><img src="./images/paper.png"  /><P class="cword">PC PICKED</P></div>';
            yourpick[2].innerHTML = yourChoice;
            comppick[2].innerHTML = comp_Choice;
        }

        console.log("TIE UP");
    }
    if (choice == 2 && random == 1) {
        comp++;
        compRun.innerHTML = comp;
        middledle_div.style.display = "none";
        winnerner_div.style.display = "none";
        looserr_div.style.display = "block";
        tie_match_div.style.display = "none";

        let looserrdiv =
            '<div class="scissor "><img src="./images/scissor.png"  /><P class="cword">YOU PICKED</P></div> ';
        let winnernerdiv =
            '<div class="rock "><img src="./images/rock.png"  /><P class="cword">PC PICKED</P></div> ';
        yourpick[1].innerHTML = looserrdiv;
        comppick[1].innerHTML = winnernerdiv;
        localStorage.setItem("comp_score", comp);
        localStorage.setItem("your_score", user);
        console.log("YOU LOOSE");
    } else if (choice == 2 && random == 3) {
        user++;
        yourRun.innerHTML = user;
        middledle_div.style.display = "none";
        winnerner_div.style.display = "block";

        let winnernerdiv =
            '<div class="scissor "><img src="./images/scissor.png"  /><P class="cword">YOU PICKED</P></div> ';
        let looserrdiv =
            '<div class="paper "><img src="./images/paper.png"  /><P class="cword">PC PICKED</P></div> ';
        comppick[0].innerHTML = looserrdiv;
        yourpick[0].innerHTML = winnernerdiv;
        localStorage.setItem("comp_score", comp);
        localStorage.setItem("your_score", user);
        console.log("YOU WIN");
    }
    if (choice == 3 && random == 1) {
        user++;
        yourRun.innerHTML = user;
        middledle_div.style.display = "none";
        winnerner_div.style.display = "block";
        let winnernerdiv =
            '<div class="paper "><img src="./images/paper.png"  /><P class="cword">YOU PICKED</P></div> ';
        let looserrdiv =
            '<div class="rock "><img src="./images/rock.png"  /><P class="cword">PC PICKED</P></div> ';
        comppick[0].innerHTML = looserrdiv;
        yourpick[0].innerHTML = winnernerdiv;
        localStorage.setItem("comp_score", comp);
        localStorage.setItem("your_score", user);
        console.log("YOU WIN");
    } else if (choice == 3 && random == 2) {
        comp++;
        compRun.innerHTML = comp;
        middledle_div.style.display = "none";
        winnerner_div.style.display = "none";
        looserr_div.style.display = "block";

        let looserrdiv =
            '<div class="paper "><img src="./images/paper.png"  /><P class="cword">YOU PICKED</P></div> ';
        let winnernerdiv =
            '<div class="scissor "><img src="./images/scissor.png"  /><P class="cword">PC PICKED</P></div> ';
        yourpick[1].innerHTML = looserrdiv;
        comppick[1].innerHTML = winnernerdiv;
        localStorage.setItem("comp_score", comp);
        localStorage.setItem("your_score", user);
        console.log("YOU LOOSE");
    }
}
function againplay() {
    middledle_div.style.display = "block";
    head_div.style.display = "flex";
    winnerner_div.style.display = "none";
    looserr_div.style.display = "none";
    tie_match_div.style.display = "none";
    congratulations_div.style.display = "none";
}

function congrats() {
    middledle_div.style.display = "none";
    winnerner_div.style.display = "none";
    looserr_div.style.display = "none";
    tie_match_div.style.display = "none";
    congratulations_div.style.display = "block";
    head_div.style.display = "none";
}
