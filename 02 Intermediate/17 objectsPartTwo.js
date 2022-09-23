// Objects from MDN docs

var User = {
    name: "",
    getUserName: function () {
      console.log(`User name is : ${this.name}`);
    },
  };
  
  var hafiz = Object.create(User);
  console.log(hafiz);
  hafiz.name = "Hafiz mp";
  hafiz.getUserName();
  
  var sam = Object.create(User, {
    name: { value: "codekofy" },
    courseCount: { value: 3 },
  });
  
  sam.getUserName();