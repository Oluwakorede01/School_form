

function validate(){

let isSchoolNameValid= true;
let isStudentFistNameValid= true;
let isStudentSecondNameValid= true;
let isParentFirstNameValid= true;
let isParentSecondNameValid= true;
let isParentPhoneValid= true;
let isParentEmailValid= true;
let isPreferredSportValid= true;
let isStudentPasswordValid= true;
let isConfirmPasswordValid= true;


// alert((document.getElementById("txtSchoolName").value))


// School Name
  if(document.getElementById("txtSchoolName").value == ""){

isSchoolNameValid= false;

  document.getElementById("spnIsSchoolNameValid").innerHTML="Please enter school name";

  document.getElementById("spnIsSchoolNameValid").style.color="red";

  }

  else

  {
    isSchoolNameValid= true;
      document.getElementById("spnIsSchoolNameValid").innerHTML="Valid";

       document.getElementById("spnIsSchoolNameValid").style.color="green";
  }

  // Student Name

   if(document.getElementById("firstName").value == ""){

isStudentFistNameValid= false;

  document.getElementById("spnIsFirstNameValid").innerHTML="Please enter first name";

  document.getElementById("spnIsFirstNameValid").style.color="red";

  }

  else

  {
    isStudentFistNameValid= true;
      document.getElementById("spnIsFirstNameValid").innerHTML="Valid";

       document.getElementById("spnIsFirstNameValid").style.color="green";
  }



  if(document.getElementById("secondName").value == ""){

isStudentSecondNameValid= false;

  document.getElementById("spnIsSecondNameValid").innerHTML="Please enter your second name";

  document.getElementById("spnIsSecondNameValid").style.color="red";

  }

  else

  {
    isStudentFistNameValid= true;
      document.getElementById("spnIsSecondNameValid").innerHTML="Valid";

       document.getElementById("spnIsSecondNameValid").style.color="green";
  }

// Parent Name


   if(document.getElementById("parentFirstName").value == ""){

isParentFirstNameValid= false;

  document.getElementById("spnIsParentFirstNameValid").innerHTML="Please enter parent first name";

  document.getElementById("spnIsParentFirstNameValid").style.color="red";

  }

  else

  {
    isParentFirstNameValid= true;
      document.getElementById("spnIsParentFirstNameValid").innerHTML="Valid";

       document.getElementById("spnIsParentFirstNameValid").style.color="green";
  }



  if(document.getElementById("parentSecondName").value == ""){

isParentSecondNameValid= false;

  document.getElementById("spnIsParentSecondNameValid").innerHTML="Please enter parent second name";

  document.getElementById("spnIsParentSecondNameValid").style.color="red";

  }

  else

  {
    isParentSecondNameValid= true;
      document.getElementById("spnIsParentSecondNameValid").innerHTML="Valid";

       document.getElementById("spnIsParentSecondNameValid").style.color="green";
  }
  
  // Parent Phone

   if(document.getElementById("parentPhone").value == ""){

isParentPhoneValid= false;

  document.getElementById("spnIsParentPhoneValid").innerHTML="Please enter parent phone number";

  document.getElementById("spnIsParentPhoneValid").style.color="red";

  }

  else

  {
    isParentPhoneValid= true;
      document.getElementById("spnIsParentPhoneValid").innerHTML="Valid";

       document.getElementById("spnIsParentPhoneValid").style.color="green";
  }

  // Parent Email

   if(document.getElementById("parentEmail").value == ""){

isParentEmailValid= false;

  document.getElementById("spnIsParentEmailValid").innerHTML="Please enter parent email address";

  document.getElementById("spnIsParentEmailValid").style.color="red";

  }

  else

  {
    isParentPhoneValid= true;
      document.getElementById("spnIsParentEmailValid").innerHTML="Valid";

       document.getElementById("spnIsParentEmailValid").style.color="green";
  }


  // Preferred sport


   if(document.getElementById("preferredSport").value == ""){

isPreferredSportValid= false;

  document.getElementById("spnIsPreferredSportValid").innerHTML="Please enter preferred sport";

  document.getElementById("spnIsPreferredSportValid").style.color="red";

  }

  else

  {
    isPreferredSportValid= true;
      document.getElementById("spnIsPreferredSportValid").innerHTML="Valid";

       document.getElementById("spnIsPreferredSportValid").style.color="green";
  }




  // Student Password

   if(document.getElementById("studentPassword").value == ""){

isStudentPasswordValid= false;

  document.getElementById("spnIsStudentPasswordValid").innerHTML="Please enter password";

  document.getElementById("spnIsStudentPasswordValid").style.color="red";

  }

  else

  {
    isStudentPasswordValid= true;

      document.getElementById("spnIsStudentPasswordValid").innerHTML="Valid";

       document.getElementById("spnIsStudentPasswordValid").style.color="green";
  }


  // Confirm password


   if(document.getElementById("confirmPassword").value == ""){

 isConfirmPasswordValid= false;

  document.getElementById("spnIsConfirmPasswordValid").innerHTML="Please re-enter password";

  document.getElementById("spnIsConfirmPasswordValid").style.color="red";

  }
  
else if( document.getElementById("confirmPassword").value != document.getElementById("studentPassword").value)
{

  isConfirmPasswordValid= false;

  document.getElementById("spnIsConfirmPasswordValid").innerHTML="Please re-enter password";

  document.getElementById("spnIsConfirmPasswordValid").style.color="red";


}
  else 

  {
     isConfirmPasswordValid= true;
      document.getElementById("spnIsConfirmPasswordValid").innerHTML="Valid";

       document.getElementById("spnIsConfirmPasswordValid").style.color="green";
  }

  


  if(isSchoolNameValid == false || isStudentFistNameValid == false || isStudentSecondNameValid == false|| isParentFirstNameValid == false || isParentSecondNameValid ==false || isParentPhoneValid == false || isParentEmailValid == false || isPreferredSportValid == false || isStudentPasswordValid == false ||  isConfirmPasswordValid == false){
    
    return false;
  }
  else
    {
    return true;
  }
  

  }


function resetForm(){


  document.getElementById("spnIsSchoolNameValid").innerHTML="";
  document.getElementById("spnIsFirstNameValid").innerHTML="";
  document.getElementById("spnIsSecondNameValid").innerHTML="";
  document.getElementById("spnIsParentFirstNameValid").innerHTML="";
  document.getElementById("spnIsParentSecondNameValid").innerHTML="";
  document.getElementById("spnIsParentPhoneValid").innerHTML="";
  document.getElementById("spnIsParentEmailValid").innerHTML="";
  document.getElementById("spnIsPreferredSportValid").innerHTML="";
  document.getElementById("spnIsStudentPasswordValid").innerHTML="";
  document.getElementById("spnIsConfirmPasswordValid").innerHTML="";
   
}

