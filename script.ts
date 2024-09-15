document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameElement = document.getElementById("name") as HTMLInputElement;
  let emailElement = document.getElementById("email") as HTMLInputElement;
  let phoneElement = document.getElementById("phone") as HTMLInputElement;
  let addressElement = document.getElementById("address") as HTMLInputElement;

  let educationElement = document.getElementById("edu") as HTMLInputElement;
  let experienceElement = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  let skillElement = document.getElementById("skill") as HTMLInputElement;

  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillElement
  ) {
    let name = nameElement.value;
    let phone = phoneElement.value;
    let email = emailElement.value;
    let address = addressElement.value;
    let edu = educationElement.value;
    let experience = experienceElement.value;
    let skill = skillElement.value;

    // const resumeOutput = `

    let resumeOutput = ` <h2>Resume</h2>


   <p> <strong> Name: </strong> ${name}</p>   
    <p> <strong> Email: </strong> ${email}</p>   
    <p> <strong> Phone: </strong> ${phone}</p>
    <p> <strong> address: </strong> ${address}</p>

    <h3> Education </h3>
    <p> ${edu}</p>

    <h3> Experience </h3>
    <p> ${experience}</p>

    <h3> Skill </h3>
    <p> ${skill}</p>
    
    `;

    let resumeOutputElement = document.getElementById("resumeOutput");

    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error(`the resume output element is missing`);
    }
  }
});
