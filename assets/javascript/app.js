// Define avaiable questions -
// Define answers to said questions -
// Make 15 second timer to count down only on button start -
// At button start:
    // Counter is set to 0 -
    // Start 15 second timer -
    // Randomly populate question field -
    // Populate answer fields -
    // Update photo that matches question -
// When correct answer is selected:
    // Counter counts up by one-------
    // Next question is given:
        // Timer resets to 15 seconds -
        // Another question is randomly selected (Must be a question that has not already been selected)------
        // Answers populate -
        // Photo populates -
// When incorrect answer is selected:
    // All buttons turn red EXCEPT
    // Correct answer is highlighted green
    // "Keep Going?" button is reveiled
        // Clicking button will give the next question -
// When timer runs out:
    // "Time's Up" div will reveil -
    // All buttons turn red EXCEPT -----------------
    // Correct answer is highlighted green ------------------
    // "Keep Going?" button is reveiled -
        // Clicking button will give the next question -
// When all questions have been answered:
    // Player is alerted to their final score
    // "Play Again?" button reveiled:
        // Clicking button will reload page

var questions = ["Which operator does this icon belong to?"];

var answers = [
    'Sledge', 'Smoke', 'Thatcher', 'Mute', 
    'Ash', 'Thermite', 'Castle', 'Pulse', 
    'Rook', 'Doc', 'Twitch', 'Montagne', 
    'Glaz', 'Fuze', 'Kapkan', 'Tachanka', 
    'Blitz', 'IQ', 'J\u00E4ger', 'Bandit', 
    'Buck', 'Frost', 
    'Blackbeard', 'Valkyrie', 
    'Capit\u00E3o', 'Caveira', 
    'Hibana', 'Echo', 
    'Jackal', 'Mira', 
    'Ying', 'Lesion', 
    'Zofia', 'Ela', 
    'Dokkaebi', 'Vigil', 
    'Lion', 'Finka', 
    'Maestro', 'Alibi', 
    'Maverick', 'Clash', 
    'Nomad', 'Kaid'];

// var pics = [
//     'sledge-icon.png', 'smoke-icon.png', 'thatcher-icon.jpg', 'mute-icon.jpg',
//     'ash-icon.png', 'thermite-icon.png', 'castle-icon.png', 'pulse-icon.png',
//     'rook-icon.jpg', 'doc-icon.jpg', 'twitch-icon.jpg', 'monty-icon.png',
//     'glaz-icon.png', 'fuze-icon.png', 'kapkan-icon.jpg', 'tachanka-icon.png',
//     'blitz-icon.png', 'IQ-icon.jpg', 'jager-icon.png', 'bandit-icon.jpg',
//     'buck-icon.jpg', 'frost-icon.png',
//     'blackbeard-icon.png', 'valkyrie-icon.png',
//     'capitao-icon.png', 'caviera-icon.png',
//     'hibana-icon.png', 'echo-icon.png',
//     'jackal-icon.jpg', 'mira-icon.jpg',
//     'ying-icon.png', 'lesion-icon.png',
//     'zofia-icon.jpg', 'ela-icon.jpg',
//     'dokkaebi-icon.jpg', 'vigil-icon.png',
//     'lion-icon.png', 'finka-icon.png',
//     'maestro-icon.png', 'alibi-icon.png',
//     'maverick-icon.png', 'clash-icon.png',
//     'nomad-icon.png', 'kaid-icon.png'];

var pics = [
    {photo: 'sledge-icon.png', operator: 'Sledge'}, {photo: 'smoke-icon.png', operator: 'Smoke'}, {photo: 'thatcher-icon.jpg', operator: 'Thatcher'}, {photo: 'mute-icon.jpg', operator: 'Mute'},
    {photo: 'ash-icon.png', operator: 'Ash'}, {photo: 'thermite-icon.png', operator: 'Thermite'}, {photo: 'castle-icon.png', operator: 'Castle'}, {photo: 'pulse-icon.png', operator: 'Pulse'},
    {photo: 'rook-icon.jpg', operator: 'Rook'}, {photo: 'doc-icon.jpg', operator: 'Doc'}, {photo: 'twitch-icon.jpg', operator: 'Twitch'}, {photo: 'monty-icon.png', operator: 'Montagne'},
    {photo: 'glaz-icon.png', operator: 'Glaz'}, {photo: 'fuze-icon.png', operator: 'Fuze'}, {photo: 'kapkan-icon.jpg', operator: 'Kapkan'}, {photo: 'tachanka-icon.png', operator: 'Tachanka'},
    {photo: 'blitz-icon.png', operator: 'Blitz'}, {photo: 'IQ-icon.jpg', operator: 'IQ'}, {photo: 'jager-icon.png', operator: 'J\u00E4ger'}, {photo: 'bandit-icon.jpg', operator: 'Bandit'},
    {photo: 'buck-icon.jpg', operator: 'Buck'}, {photo: 'frost-icon.png', operator: 'Frost'},
    {photo: 'blackbeard-icon.png', operator: 'Blackbeard'}, {photo: 'valkyrie-icon.png', operator: 'Valkyrie'},
    {photo: 'capitao-icon.png', operator: 'Capit\u00E3o'}, {photo: 'caviera-icon.png', operator: 'Caviera'},
    {photo: 'hibana-icon.png', operator: 'Hibana'}, {photo: 'echo-icon.png', operator: 'Echo'},
    {photo: 'jackal-icon.jpg', operator: 'Jackal'}, {photo: 'mira-icon.jpg', operator: 'Mira'},
    {photo: 'ying-icon.png', operator: 'Ying'}, {photo: 'lesion-icon.png', operator: 'Lesion'},
    {photo: 'zofia-icon.jpg', operator: 'Zofia'}, {photo: 'ela-icon.jpg', operator: 'Ela'},
    {photo: 'dokkaebi-icon.jpg', operator: 'Dokkaebi'}, {photo: 'vigil-icon.png', operator: 'Vigil'},
    {photo: 'lion-icon.png', operator: 'Lion'}, {photo: 'finka-icon.png', operator: 'Finka'},
    {photo: 'maestro-icon.png', operator: 'Maestro'}, {photo: 'alibi-icon.png', operator: 'Alibi'},
    {photo: 'maverick-icon.png', operator: 'Maverick'}, {photo: 'clash-icon.png', operator: 'Clash'},
    {photo: 'nomad-icon.png', operator: 'Nomad'}, {photo: 'kaid-icon.png', operator: 'Kaid'}
];  

window.onload = function(){
    startButton();
};

var time = 11;
var intervalId;
var counter = 0;
var questionBank = pics.slice(0);
var correctAnswer = false; 

function clearKeep() {
    // When keep going button/sure is clicked, give new question
    $("#sure").click(function(){
        start();
    });
};

function startButton() {
    // Creates start button
    $("<button>").appendTo("#start-button");
    $("#start-button").html("Start the Quiz!");
    $("#start-button").on("click", start);
};

function startButtonClick() {
    // When start button is clicked, remove button from view
    $("#start-button").empty();
    $("#start-button").removeClass("begin");
    // show timer
    $("#timer").addClass("clock");
    // populate question
    $("#question").html(questions);
    // correct background image
    $("body").addClass("start");
    // and make sure "Keep going" button will function
    clearKeep();
};

function start() {
    startButtonClick();
    // Clear timer
    clearInterval(intervalId);
    // Set timer
    time = 11;
    // Begin countdown
    intervalId = setInterval(count, 1000);
    // Make sure start button and keep going button are not visible
    $("#start-button").empty();
    $("#keep-going").empty();
    $("#keep-going").removeClass("continue");
    // Clear out answers and CORRECT/INCORRECT markers
    for(var k = 1; k < 5; k++) {
        $("#option-" + k).removeClass("incorrect");
        $("#option-" + k).removeClass("correct");
        $("#option-" + k).empty();
    };
    populateAnswers();
};

function count() {
    time--
    $("#timer").html(time);
    if (time === 0) {
        timesUp();
        clearInterval(intervalId);
        time = 11;
    };
};

function checkCount() {
    counter++;
    $("#counter").html(counter);
};

function timesUp() {
    // Display that time is up to user
    var timeUp = document.getElementById("timer");
    timeUp.textContent = "Time's Up!";
    // Show "Keep Going" button
    $("<button>").appendTo("#keep-going");
    $("#keep-going").addClass("continue");
    $("#keep-going").html("Keep Going?");
};

function populateAnswers() {
    
    var answerBank = answers.slice(0);
    var answerNum = Math.floor(Math.random() * 4) + 1;
    var randomNum = Math.floor(Math.random() * questionBank.length);
    var ranPic = questionBank[randomNum].photo;
    var ranAnsCor = questionBank[randomNum].operator;
    
    // Gives the correct CSS to the buttons
    $(".answer-button").addClass("answer");
    // Populates the picture and resizes it
    $("#reference-pic").attr("src", "assets/images/" + ranPic);
    $("#reference-pic").attr({"width": "350", "height": "350"});
    // Randomly puts the CORRECT answer into 1 of the answers
    $("#option-" + answerNum).html(ranAnsCor);
    
    // Removes the chosen answer from the Question Bank
    questionBank.splice(randomNum, 1);
    // Removes the chosen answer from the Answer Bank
    answerBank.splice(ranAnsCor, 1);
    
    // Anytime any answer is clicked, highlight the CORRECT answer in green
    for(var i = 1; i < 5; i++) {
        $("#option-" + i).click(function(){
            $("#option-" + answerNum).addClass("correct");
        });
    };
    
    // When time is up, highlight CORRECT answer in green **(DOES NOT WORK atm)**
        // Cannot call "time" in function, but cannot call answerNum in "timeUp" function
    if(time === 0) {
        $("#option-" + answerNum).addClass("correct");
        console.log("time up");
    };
    
    // If the CORRECT answer is chosen, count up by 1 **(DOES NOT WORK atm)** and populates new question
        // Counter stacks correct answers leading to incorrect counts
    $("#option-" + answerNum).click(function(){
        checkCount();
        start();
        console.log("Correct");
        console.log(answerBank);
    });
    
    // Populate remaining answers with a random operator that is also not the CORRECT answer
    for(var j = 1; j < 5; j++) {
        // Checks if there is anything in the div before populating
        if($("#option-" + j).text().length === 0) {
            var ansNum = Math.floor(Math.random() * answerBank.length);
            var ranAns = answerBank[ansNum];
            // Populates each answer
            $("#option-" + j).html(ranAns);
            // Removes that answer from the Answer Bank
            answerBank.splice(ansNum, 1);
            // When INCORRECT answer is chosen, it is highlighted red
            $("#option-" + j).click(function(){
                $(this).addClass("incorrect");
                console.log("Incorrect");
                // Stops clock
                clearInterval(intervalId);
                // Reveils Keep going button
                $("<button>").appendTo("#keep-going");
                $("#keep-going").addClass("continue");
                $("#keep-going").html("Keep Going?");
            });
        };
    };
};