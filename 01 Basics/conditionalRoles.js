//TODO:
// create an application with the following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content 

var user = "admin"

switch (user) {
    case "admin":
        console.log("you have full access");
        break;
    case "subadmin":
        console.log("you have access to create/delete courses");
        break;
    case 'testprep':
        console.log("you have access to create/delete tests");
        break;
        case 'user':
            console.log("you have access to consume content");
            break;

    default:
        console.log("guest");
        break;
}