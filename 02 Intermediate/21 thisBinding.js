// Borrow a method using bind

const hafiz = {
    firstName: "Code",
    lastName: "Kofy",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
      console.log(`
          First name is ${this.firstName}
          Last name is ${this.lastName}
          His role is ${this.role}
          and he is studying ${this.courseCount} courses
          `);
    },
  };
  
  const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
  };
  
//   hafiz.getInfo();
//   dj.getInfo();
  
//   var djInfo = hafiz.getInfo.bind(dj);
//   djInfo();
  
  hafiz.getInfo.call(dj);