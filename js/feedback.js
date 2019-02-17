  $(function() {
    $('.error').hide();

    $(".button").click(function(){
      // validate and process form here

      var firstName = $("input#fname").val();
     if (firstName == "") {
      $('.error').show();
      $("input#fname").focus();
		  return false;
		}
		var lastName = $("input#lname").val();
	 if (lastName == "") {
    $('.error').show();
		  return false;
		}
		var email = $("input#email").val();
     if (email == "") {
          return false;
   }
   
	 	var feedback = $("textarea#subject").val();
     if (feedback == "") {

          return false;
	 }
    });
  });


  