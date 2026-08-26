function showScreen(screenId) {

    document.getElementById(screenId).scrollIntoView({
        behavior: "smooth"
    });

}


function checkBirthday() {

    const input = document.getElementById("birthday");

    const error = document.getElementById("error");

    const enteredDate = input.value.trim();


   if (enteredDate === "10/06/2006") {

    error.style.display = "none";

    input.style.borderBottomColor = "#D8B77A";

    setTimeout(() => {

        showScreen("screen4");

    }, 500);




    }

    else {

        error.style.display = "block";

        input.style.borderBottomColor = "#D49A9A";

        input.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 350
            }
        );

    }

}
function checkColour(colour) {

    const error = document.getElementById("colour-error");

    const correct = document.getElementById("colour-correct");


    if (colour === "mehendi") {

        error.style.display = "none";

        correct.style.display = "block";


        setTimeout(function () {

            showScreen("movie-memory");

        }, 900);

    }

    else {

        correct.style.display = "none";

        error.style.display = "block";

    }

}
function showScreen(screenId) {

    document.getElementById(screenId).scrollIntoView({
        behavior: "smooth"
    });

}
function showFinalMessage() {

    const message = document.getElementById("hidden-final");

    message.classList.add("show");

}