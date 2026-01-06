let queryString= window.location.search;

// This is used to alert all the parameters and values on the Form.

// alert(queryString);


// queryStringParams is used to get specified parameter values from all available parameters.

let queryStringParams= new URLSearchParams(queryString);

// This is used to write out the value of the parameter gotten.

document.write("School Name:" + " ", queryStringParams.get("txtSchoolName")+ "<br>")

document.write("Student First Name: " + " ",queryStringParams.get("firstName") + "<br>")

document.write("Student Second Name:" + " ", queryStringParams.get("secondName") + "<br>")

document.write("Parent First Name:" + " ", queryStringParams.get("parentFirstName") + "<br>")

document.write("Parent Second Name:"  + " ", queryStringParams.get("parentSecondName") + "<br>")

document.write("Parent Phone Number:" + " ", queryStringParams.get("parentPhone")+ "<br>")

document.write("Parent Email Address:" + " ",queryStringParams.get("parentEmail")+ "<br>")

document.write("Preferred Sport:" + " ", queryStringParams.get("preferredSport")+ "<br>")

document.write("Student Password: " + " ",queryStringParams.get("studentPassword") + "<br>")

document.write("Student Password Confirmed: " + " ",queryStringParams.get("confirmPassword") + "<br>")




// This is used to get the value of a pararmeter specified to get among the parameters and alert it on the screen.

// alert(queryStringParams.get("txtSchoolName"))

