/*
Key: 
    [] = not finalised, may change in future versions
    ... = to be contiuned
    [?] = undetermined, a placeholder


Problem
To create a a "scam" survey that will gather data on the users that will then be used to modify the survey itself.

Solution
step 1: Convience the user that the survey is to win a free pizza by completing 3 challenges
step 2: Tell them that the first challenge is a quiz, using the way the interact to modify the first question
step 3: For each of the [5] Questions-
    step 3.1: Asks the user a question, using the previous modifier to change it
    step 3.2: Recieve the input from the user
    step 3.3: Create a new modifier to be used for the next question
    step 3.4: Display to the user whether they got the question correct, with extra answer for special answers
    step 3.5: [?]
...
*/

"use strict";

function pizzaTime (){//Activated by "Pizza time?" button

    let startQuiz = confirm("It's Pizza Time! Complete 3 challenges to earn a free pizza from your local PizzaHut!");//Asks the user whether they want to start the Pizza Challenges
    
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