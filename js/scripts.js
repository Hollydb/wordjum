$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var userInput = ($("#vowel").val()).split("");
    console.log(userInput)

    for (var index = 0; index < userInput.length; index +=1)
    if (vowels.includes(userInput[index])) {
      userInput.splice(index, 1, "-");
      console.log(userInput);
    }

    var output = userInput
    $("#results").append(output);
    $("#formONe").text(userInput);





});
});
