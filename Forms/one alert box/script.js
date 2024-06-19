document.getElementById("form").addEventListener("submit",function(event){
    var error = "";

//student name
const stuname = document.getElementById("sname").value.trim();
const nameRegex = /^[A-Za-z]+$/;
if (stuname.length < 3 || stuname.length > 25) {
   error +="Student name must be between 3 and 25 characters.\n";
   
}
if (!nameRegex.test(stuname)) {
   error +="Student name must contain only alphabetic characters.\n";
   
}
// rollnumber 
 const rollno = document.getElementById("rollno").value.trim();
const numRegex = /^[0-9]{1,6}$/;

    if (rollno.length === 0 || !numRegex.test(rollno)) {
       error +="Roll number must not be empty and must be numeric and up to 6 digits long.\n";
    }
    // Gender 
    const gender = document.querySelector('input[name="Gender"]:checked');
    if(!gender)
    {
       error +='Please Select a Gender \n';
    }
    //phone number 
    const phoneno = document.getElementById("phoneno").value.trim();
    if(phoneno.length !== 10|| isNaN(phoneno) || phoneno.length > 10){
       error +='Phone number must be exactly 10 digits.\n';
       
    }
    //email
    
    
    //standard 
    var standard = document.getElementById("Standard").value;
    if (standard === "Choose Below One") {
       error +="Please select a valid Standard.\n";
        
    }
    // section
    var section = document.getElementById("Section").value;
    if ( section === "Choose Below One") {
       error +="Please select a valid Section.\n";
    }
    if(error != ""){
    alert(error)
    event.preventDefault();
}
});
