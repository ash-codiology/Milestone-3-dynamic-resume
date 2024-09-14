//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
event.preventDefault();


//type assertion
let nameElement = document.getElementById("name") as HTMLInputElement;
let emailElement = document.getElementById("email") as HTMLInputElement;
let phoneElement = document.getElementById("phone") as HTMLInputElement;

let educationElement = document.getElementById("education") as HTMLInputElement;

let jobTitleElement = document.getElementById("jobTitle") as HTMLInputElement;
let companyNameElement = document.getElementById("companyName") as HTMLInputElement;
let workDurationElement = document.getElementById("workDuration") as HTMLInputElement;

let skillsElement = document.getElementById("skills") as HTMLInputElement;

if (nameElement && emailElement && phoneElement && educationElement &&jobTitleElement && companyNameElement && workDurationElement && skillsElement ){

let name = nameElement.value
let email = emailElement.value
let phone = phoneElement.value
let education = educationElement.value
let job = jobTitleElement.value
let company = companyNameElement.value
let workDuration = workDurationElement.value
let skills = skillsElement.value


//creconstate resume output
let resumeOutput= `
<h2> resume</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone number:</strong> ${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>job</h3>
<p>${job}</p>

<h3>company</h3>
<p>${company}</p>

<h3>workDuration</h3>
<p>${workDuration}</p>

<h3>skills</h3>
<p>${skills}</p>          

`
let resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
} else {
    console.error('the resume output element is missing')
}
}else{
    console.error('one or more intput element are missing')
}
})