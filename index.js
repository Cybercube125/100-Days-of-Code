"use strict";
//My first js  code!
//The main function that is used by index.html
function myFunction (){
    document.getElementById("demo").innerHTML = "Hello JavaScript";
}


function pizzaTime (){//Activated by "Pizza time?" button
    let startQuiz = confirm("It's Pizza Time! Complete 3 challenges to earn a free pizza from your local PizzaHut!");//Asks the userwhether they want to start the Pizza Challenges
    if (startQuiz) {
        let Score = 0;
        let Modify = confirm("Great! The first challenge will be a quiz!");
        let Answer1 = prompt(`Question 1!
        What is ${Modify ? "96 + 4":"3125 x 482"}?`)
        let Answer2;
        switch (Answer1,Modify) {
            
            case 100,true:
                Modify2 = confirm("Correct! You have earned a point!");
                Score = ++Score;
                alert(Score);
            case 100,false:
                Modify2 = confirm("Right answer for the wrong question, but hey I'll give you half a point.");
                Score = Score + 0.5
            default:
                Modify2 = confirm("Completely incorrect. You didn't earn a point!");
        }
        
    } else {
        alert("Oh... Ok then :C");
    }
}