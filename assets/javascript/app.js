// Define avaiable questions
// Define answers to said questions
// Make 15 second timer to count down only on button start
// At button start:
    // Counter is set to 0
    // Start 15 second timer
    // Randomly populate question field
    // Populate answer fields
    // Update photo that matches question
// When correct answer is selected:
    // Counter counts up by one
    // Next question is given:
        // Timer resets to 15 seconds
        // Another question is randomly selected (Must be a question that has not already been selected)
        // Answers populate
        // Photo populates
// When incorrect answer is selected:
    // All buttons turn red EXCEPT
    // Correct answer is highlighted green
    // "Keep Going?" button is reveiled
        // Clicking button will give the next question
// When timer runs out:
    // "Time's Up" div will reveil
    // All buttons turn red EXCEPT
    // Correct answer is highlighted green
    // "Keep Going?" button is reveiled
        // Clicking button will give the next question
// When all questions have been answered:
    // Player is alerted to their final score
    // "Play Again?" button reveiled:
        // Clicking button will reload page