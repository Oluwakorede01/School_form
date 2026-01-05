let queryString= window.location.search;

// This is used to alert all the parameters and values on the Form.

// alert(queryString);


// queryStringParams is used to get specified parameter values from all available parameters.

let queryStringParams=new URLSearchParams(queryString);

// This is used to write out the value of the parameter gotten.

document.write("School Name:", queryStringParams.get("txtSchoolName"))


// This is used to get the value of a pararmeter specified to get among the parameters and alert it on the screen.

// alert(queryStringParams.get("txtSchoolName"))

