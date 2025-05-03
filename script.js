const riddles = [
    {
        title: "Question #1",
        question: "Three people are standing in a line, each wearing a hat that is either red or blue. They can only see the people in front of them (not behind or their own hat). The person at the back says he sees two red hats. The second person says he sees one red hat. The first person (in front) says he doesn’t know his hat color. What color is the first person’s hat, and why?",
        answer: "Blue. If the last person saw two red hats, and the second person saw one, it must mean the first person does not have a red hat. So his hat must be blue."
    },
    {
        title: "Question #2",
        question: "An archer has a bow and sixty arrows. He shoots his first arrow at exactly 12:00 noon, and continues to shoot one arrow every minute. What time will he shoot his last arrow?",
        answer: "At 12:59. Since he shoots the first arrow at 12:00, the 60th arrow is shot 59 minutes later."
    },
    {
        title: "Question #3",
        question: "Petros and Maria live together with their 12 children. Some of them are from Petros’s previous marriage, and some from Maria’s. Each of them is directly related to 9 of the children. How many children did they have together?",
        answer: "They had 6 children together. Petros had 3 from his previous marriage, and Maria had 3 from hers."
    },
    {
        title: "Question #4",
        question: "Three friends go to a wine store and buy a bottle of wine for 300 drachmas, paying 100 each. As they leave, the clerk runs after them and says the wine was actually 295 drachmas, not 300. He gives them back 5 drachmas. Since they can’t split 5 evenly, each takes 1 drachma and they give 2 drachmas as a tip to the clerk.\n\nLater they think: We each paid 100 and got 1 back, so we paid 99 drachmas. 3 × 99 = 297, plus 2 for the tip = 299. Where is the missing drachma?",
        answer: "The trick is in the logic. The 297 includes the 2 drachmas tip. So the cost of the wine is 297 – 2 = 295, which is correct. You shouldn't add the tip to 297; you subtract it."
    },
    {
        title: "Question #5",
        question: "You have 10 bags full of gold coins. In one of the bags, all the coins are fake. Real coins weigh exactly 10 grams each, but fake coins weigh 9 grams each. You have a digital scale that you can use only once. How can you identify the bag with the fake coins using the scale just one time?",
        answer: "Take 1 coin from the first bag, 2 coins from the second, 3 from the third, and so on, up to 10 coins from the tenth bag. You will have a total of 55 coins. If all coins were real, the total weight would be 550 grams. Every fake coin is 1 gram lighter, so if your scale shows 549 grams, the fake coins are from bag 1. If it shows 548 grams, they’re from bag 2, and so on. Subtract the measured weight from 550 to find the fake bag."
    },
    {
        title: "Question #6",
        question: "A man says to his friend: 'I have three daughters, and the product of their ages is 36. The sum of their ages is the same as the number on the house across the street.' The friend thinks for a while and says, 'I still can’t figure it out.' The man replies, 'My oldest daughter has blue eyes.' What are the ages of the daughters?",
        answer: "Ages are 9, 2, and 2. The possible age combinations that multiply to 36 include (1,1,36), (1,2,18), (2,2,9), (1,6,6), etc. Only (2,2,9) and (1,6,6) have the same sum (13), which is why the friend was unsure. The clue about the 'oldest daughter' implies that there is one child who is clearly oldest — which excludes (1,6,6), where there is no single oldest. So the answer is (2,2,9)."
    },
    {
        title: "Question #7",
        question: "Fill in the 10 boxes below with a 10-digit number so that each digit at position *i* (0 through 9) represents how many times the digit *i* appears in the entire number:\n\n|_|_|_|_|_|_|_|_|_|_|\n 0 1 2 3 4 5 6 7 8 9\n\nFor example, the digit in position 0 tells how many 0s are in the number, the digit in position 1 tells how many 1s, etc. The answer is unique.",
        answer: "The number is 6210001000. Each digit correctly counts how many times its index appears in the number."
    }
];

let currentQuestion = -1;
let showingAnswer = false;

const next = document.getElementById("next");
const tempQuestion = document.getElementById('tempQuestion');
const tempText = document.getElementById('tempText');
const secondButton = document.getElementById("answer");

//----------------------------------------------first button--------------------------------------------------
next.addEventListener("click", nextQuestion);
function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % riddles.length;
    showingAnswer = false;
    tempText.innerText = riddles[currentQuestion].question;
    tempQuestion.innerText = riddles[currentQuestion].title;
    secondButton.innerText = "show answer";
}
//---------------------------------------------second button--------------------------------------------------
secondButton.addEventListener("click", function showAnswer() {
    if (!showingAnswer) {
        tempQuestion.innerText = "Answer " + riddles[currentQuestion].title;
        tempText.innerText = riddles[currentQuestion].answer;
        secondButton.innerText = "show question";
        showingAnswer = true;
    } else {
        tempQuestion.innerText = riddles[currentQuestion].title;
        tempText.innerText = riddles[currentQuestion].question;
        secondButton.innerText = "show answer";
        showingAnswer = false;
    }
});
//---------------------------------------------insert button--------------------------------------------------
let userName = "";
const insert = document.getElementById("insert");
const user = document.getElementById("user");
insert.addEventListener("click", function () {
    const input = document.getElementById("userName").value.trim();
    const inputStyle = document.getElementById("userName");

    if (input !== "") {
        
        user.innerText = input + " is playing";
        user.style.display="inline";
        nextQuestion();
        inputStyle.style.display = "none";
        insert.style.display = "none";
        next.style.display = "inline";
        secondButton.style.display = "inline";
    } else {
        alert("Please enter your name.");
    }
});
