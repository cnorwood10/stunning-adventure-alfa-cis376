// A $( document ).ready() block.
//$() is called a collector
// $ = jQuery world 
$( document ).ready(function() { 
  
  console.log( "ready!" ); 
  
  //click the button
  
  $('#btnUserName').click(function() { 
    console.log("button clicked")
//     var x;
//     var x = "";//string
//     var y = 8;
//     var z = TRUE;
    
    let firstname = $('#firstname').val()
    
    console.log(firstname);
      // $('#firstname').val()
    
    let greeting;
    
    greeting = "Hi there, " + firstname + " how are you doing?";
    
    $('#something').text(greeting);
    
  }); 
  
});