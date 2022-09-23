// Lexical scoping in javascript

function init() {
    var firstName = "hafiz";
    function sayFirstName() {
      console.log(firstName);
    }
    sayFirstName();
  }
  
  init();