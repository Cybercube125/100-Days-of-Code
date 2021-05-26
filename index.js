"use strict";
//My first js  code!
//The main function that is used by index.html
function myFunction (){
    document.getElementById("demo").innerHTML = "Hello JavaScript";
}

function pizzaTime (){
    let startQuiz = confirm("It's Pizza Time! Complete 3 challenges to earn a free pizza from your local PizzaHut!");
    if (startQuiz) {
        let Score = 0;
        let Modify = confirm("Great! The first challenge will be a quiz!");
        let Answer1 = prompt(`Question 1!
        What is ${Modify ? "96 + 4":"3125 x 482"}?`)
        switch (Answer1,Modify) {
            case 100,true:
                alert("Correct!");
                Score = ++Score;
                alert(Score);
        }
    }
}