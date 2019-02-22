

$(document).ready(function() {
  $("form2").onsubmit=function() {
      question1 = parseInt($('input[name = "question1"]:checked').value);
	    question2 = parseInt($('input[name = "question2"]:checked').value);
	    question3 = parseInt($('input[name = "question3"]:checked').value);
	    question4 = parseInt($('input[name = "question4"]:checked').value);
      question5 = parseInt($('input[name = "question5"]:checked').value);
	    question6 = parseInt($('input[name = "question6"]:checked').value);
	    question7 = parseInt($('input[name = "question7"]:checked').value);
	    question8 = parseInt($('input[name = "question8"]:checked').value);
      question9 = parseInt($('input[name = "question9"]:checked').value);
	    question10 = parseInt($('input[name = "question10"]:checked').value);

	   result = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;

     $("grade").text(result);



return false; // required to not refresh the page; just leave this here
} //this ends the submit function

/* $(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });



/* document.getElementById("form2").onsubmit=function()
      question1 = parseInt(document.querySelector('input[name = "question1"]:checked').value);
	    question2 = parseInt(document.querySelector('input[name = "question2"]:checked').value);
	    question3 = parseInt(document.querySelector('input[name = "question3"]:checked').value);
	    question4 = parseInt(document.querySelector('input[name = "question4"]:checked').value);
      question5 = parseInt(document.querySelector('input[name = "question5"]:checked').value);
	    question6 = parseInt(document.querySelector('input[name = "question6"]:checked').value);
	    question7 = parseInt(document.querySelector('input[name = "question7"]:checked').value);
	    question8 = parseInt(document.querySelector('input[name = "question8"]:checked').value);
      question9 = parseInt(document.querySelector('input[name = "question9"]:checked').value);
	    question10 = parseInt(document.querySelector('input[name = "question10"]:checked').value);



	   result = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;

	document.getElementById("grade").innerHTML = result;{*/
