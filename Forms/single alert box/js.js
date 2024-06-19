document.getElementById("form").addEventListener("submit", function(event) {
   //fullname validation
    const fullname = document.getElementById("fname").value;
     if(fullname.length === 0||fullname.length > 20){
        alert('Fullname must be between 1 and 20 characters.');
        event.preventDefault();
        return;
    }
    //last name validation
    const lastname = document.getElementById("lname").value;
    if(lastname.length === 0||lastname.length > 20){
        alert('Lastname must be between 1 and 20 characters.');
        event.preventDefault();
        return;
    }
    //phone number validation
    const phoneno = document.getElementById("pno").value;
    if(phoneno.length !== 10|| isNaN(phoneno) || phoneno.length > 10){
        alert('Phone number must be exactly 10 digits.');
        event.preventDefault();
        return;
    }
    //email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }
    //password validation
    const password = document.getElementById("Password").value;
    if (password.length !== 10 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert('Password must be exactly 10 characters long and include both letters and digits.');
        event.preventDefault();
        return;
    }
    //date
    const date = document.getElementById("date").value;
    if(!date){
        alert('Please Select a date.');
        event.preventDefault();
        return;
    }
    //radio validation
    const Gender = document.querySelector('input[name="Gender"]:checked');
    if(!Gender){
        alert('Please Select a Gender');
        event.preventDefault();
        return;

    }
    //checkbox validation
    var qualifications = document.querySelectorAll('input[name="qualification"]:checked');
    if(qualifications.length === 0 ){
        alert('Please select at least one qualification.');
        event.preventDefault();
        return;

    }  
     // select validation
     const skills = document.getElementById("skill").value;
     if (skills === "") {
         alert('Please select a skill.');
         event.preventDefault();
         return;
     }
   alert('Form submitted successfully!');
    
    
});
