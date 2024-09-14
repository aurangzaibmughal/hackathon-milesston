// Get referencees to the form and display areas

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission

form.addEventListener('submit', (event:Event) => {
    event.preventDefault(); 
    // coollect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    
    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editabe Resme</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span contentededitable="true">${name}</span></p>
    <p><b>Email:</b><span contentededitable="true">${email}</span></p>
    <p><b>Phone:</b><span contentededitable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contentededitable="true">${education}</p>
   

    <h3>Experience</h3>
    <p contentededitable="true">${experience}</p>

    <h3>Skills</h3>
    <p contentededitable="true">${skills}</p>
    
    `;
    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;

    }else {
        console.error('Resume display element not found');
    }
    
  

    
    
});