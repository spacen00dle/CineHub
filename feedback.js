  $(function() {
  
    $(".button").click(function(){ 
      // validate and process form here
      
      var firstName = $("input#fname").val();
     if (firstName == "") {
		
		  return false;	
		}   
		var lastName = $("input#lname").val();
	 if (lastName == "") {
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
  
 function thanksPage(){
	  window.location.href = "thanksfeedback.html";
     };






  




  