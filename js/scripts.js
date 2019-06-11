// sets up the document as ready
$(document).ready(function() {
  // in the form. submit is the button type
  $("#formOne").submit(function(event) {
    // prevents the page from refreshing which is the default when hitting the submit button
    event.preventDefault();
    // setting up our variables which happens to be vowels into an array
    var vowels = ['a', 'e', 'i', 'o', 'u']
    // variable for whatever value is put into the input id (in the form on html page) and then it is split into individual elements. quotes mean how many spaces inbetween characters
    var userInput = ($("#vowel").val()).split("");
    // console log is basically an alert that doesnt disrupt the page from loading
    console.log(userInput)
    // for loop, variable name is index. starting at 0 which relates to our var vowel "a". userInput.length measure how long the input is that the user gives us. index += 1 bumps the increments by 1 everytime we complete a loop
    for (var index = 0; index < userInput.length; index += 1) {
      // if statement. if the index from userInput includes vowels
      if (vowels.includes(userInput[index])) {
        // takes whatever the variable userInput is and replaces it with 1 character length which is the dash
        userInput.splice(index, 1, "-");
        // cosole log
        console.log(userInput);
      }
    }
    // setting a variable for userInput which is now called output
    var output = userInput
    // append is adding the output variable (which was userInput) into the id "results" from our html page
    $("#results").append(output);






  });
});
