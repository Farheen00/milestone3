var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("edu");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillElement) {
        var name_1 = nameElement.value;
        var phone = phoneElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var edu = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // const resumeOutput = `
        var resumeOutput = " <h2>Resume</h2>\n\n\n   <p> <strong> Name: </strong> ".concat(name_1, "</p>   \n    <p> <strong> Email: </strong> ").concat(email, "</p>   \n    <p> <strong> Phone: </strong> ").concat(phone, "</p>\n    <p> <strong> address: </strong> ").concat(address, "</p>\n\n    <h3> Education </h3>\n    <p> ").concat(edu, "</p>\n\n    <h3> Experience </h3>\n    <p> ").concat(experience, "</p>\n\n    <h3> Skill </h3>\n    <p> ").concat(skill, "</p>\n    \n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output element is missing");
        }
    }
});
