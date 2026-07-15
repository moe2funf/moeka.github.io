/* ===== Disney Quiz ===== */

function checkQuiz() {

    let score = 0;

    const questions = ["q1", "q2", "q3", "q4", "q5"];

    questions.forEach(function(question){

        const answer = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if(answer){
            score += Number(answer.value);
        }

    });

    let result = "";

    if(score <= 1){

        result = "🌱 Beginner<br>You are just starting your Disney journey!";

    }
    else if(score <= 3){

        result = "✨ Disney Fan<br>You know quite a lot about Disney!";

    }
    else if(score == 4){

        result = "🏰 Disney Lover<br>Great job! You really love Disney!";

    }
    else{

        result = "👑 Disney Master!!<br>Perfect score! You're a true Disney expert!";

    }

    document.getElementById("result").innerHTML =
    "Score: " + score + "/5<br><br>" + result;

}


/* ===== Photo Gallery ===== */

const photos = [
    "IMG_5621.JPG",
    "_MG_2074.PNG",
    "IMG_5264.png",
    "IMG_6705.png"
];

let currentPhoto = 0;

function changePhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }

    document.getElementById("photo").src = photos[currentPhoto];

}