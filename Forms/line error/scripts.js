document.getElementById("form").addEventListener("submit",function(event){
    var error = false;
    document.getElementById("inname").textContent="";
    document.getElementById("inroll").textContent="";
    document.getElementById("ingender").textContent="";
    document.getElementById("inphone").textContent="";
    document.getElementById("inselect").textContent="";
    document.getElementById("insection").textContent="";
//student name 
    var stuname = document.getElementById("sname").value.trim();
    const nameRegex = /^[A-Za-z]+$/;
    if(stuname.length < 3 || stuname.length > 25)
    {
        document.getElementById("inname").textContent="Student name must be between 3 and 25 characters and it not be empty.";
        error =true;
    }
    else if(!nameRegex.test(stuname))
        {
            document.getElementById("inname").textContent="Student name must contain only alphabetic characters.";
            error =true;
        }
// rollnumber 
const rollno = document.getElementById("rollno").value.trim();
const numRegex = /^[0-9]{1,6}$/;

    if (rollno.length === 0 || !numRegex.test(rollno)) {
    document.getElementById("inroll").textContent="Roll number must not be empty and must be numeric and up to 6 digits long.";
    error =true;
}
    // Gender 
    const gender = document.querySelector('input[name="Gender"]:checked');
    if(!gender)
    {
        document.getElementById("ingender").textContent="Please Select a Gender.";
        error =true;
    }
    //phone number 
    const phoneno = document.getElementById("phoneno").value.trim();
    if(phoneno.length !== 10|| isNaN(phoneno))
    {
    document.getElementById("inphone").textContent="Phone number must be exactly 10 digits.";
    error =true;
}
    //email
    
    
    //standard 
    var standard = document.getElementById("Standard").value;
    if (standard === "Choose Below One") {
    document.getElementById("inselect").textContent="Please select a valid Standard.";
    error =true;
    }
    // section
    var section = document.getElementById("Section").value;
    if ( section === "Choose Below One") {
     document.getElementById("insection").textContent ="Please select a valid Section.";
     error = true;
    }
    if (error) {
     event.preventDefault();
    }
    else
    {
        alert("Form submitted successfully!")
    }
    });