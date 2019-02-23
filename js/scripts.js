
$(document).ready(function() {
    $("input[type='button']").click(function(event) {
        var question1 = parseInt($('input[name = "quest1"]:checked').val());
        var question2 = parseInt($('input[name = "quest2"]:checked').val());
        var question3 = parseInt($('input[name = "quest3"]:checked').val());
        var question4 = parseInt($('input[name = "quest4"]:checked').val());
        var question5 = parseInt($('input[name = "quest5"]:checked').val());
        var question6 = parseInt($('input[name = "quest6"]:checked').val());
        var question7 = parseInt($('input[name = "quest7"]:checked').val());
        var question8 = parseInt($('input[name = "quest8"]:checked').val());
        var question9 = parseInt($('input[name = "quest9"]:checked').val());
        var question10 = parseInt($('input[name = "quest10"]:checked').val());

      var result = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;

      document.getElementById("result").innerHTML = $("#display").text("You scored " + result + " points!");

      if (result == 0) {result2 = "I don't think you studied."};
      if (result == 30) {result2 = "You need to spend more time. Try again."};
      if (result == 50) {result2 = "I think you could do better. Try again."};
      if (result == 70) {result2 = "So close. Try again."};
      if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};

      document.getElementById("grade2").innerHTML = result2;


    });

  });
