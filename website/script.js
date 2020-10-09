function checkName(){
	var firstname = document.forms['contact']['name'].value;
    var email = document.forms['contact']['emailaddress'].value;
    var subject = document.forms['contact']['subject'].value;
    var message = document.forms['contact']['message'].value;
    var pattern= /\S+@\S+\.\S+/;
	isValid =true;

	if(firstname == ""){
		document.getElementById('nameMessage').innerHTML = "Please enter a name";
	    isValid = false;
	}
	else{
		document.getElementById('nameMessage').style.display = "none";
	}
	if(!pattern.test(email)){
		document.getElementById('emailMessage').innerHTML = "Please enter a valid email, for example: simon2020@gmail.com";
		isValid = false;
	}else{
		document.getElementById('emailMessage').style.display = "none";
    }
    if(subject == ""){
		document.getElementById('subjectMessage').innerHTML = "Please enter a subject";
		isValid = false;
	}else{
		document.getElementById('subjectMessage').style.display = "none";
    }
    if(message == ""){
		document.getElementById('messageMessage').innerHTML = "Please write your message";
		isValid = false;
	}else{
		document.getElementById('messageMessage').style.display = "none";
	}
    return isValid;
    console.log(message);
    console.log(firstname);
    console.log(email);
    console.log(subject);
    console.log(pattern);
}