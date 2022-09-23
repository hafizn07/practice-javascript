// Better code with object chain in javascript

var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
  };
  
  User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
  };
  
  var hafiz = new User("hafiz", 2);
  hafiz.getCourseCount();
  
  if (hafiz.hasOwnProperty("firstName")) {
    hafiz.getFirstname();
  }
  
  //console.log(hafiz);
  
  var codekofy = new User("codekofy", 1);
  codekofy.getCourseCount();
  codekofy.getFirstname();
  //console.log(codekofy);