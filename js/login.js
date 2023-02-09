const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpSubmit = document.getElementById('signupbutton');
const signInSubmit = document.getElementById('signinbutton');
const container = document.getElementById('container');

signUpSubmit.addEventListener('click', () => {
	const signupusername = document.getElementById('signupusername').value;
	const signuppassword = document.getElementById('signuppassword').value;
	const signupemail = document.getElementById('signupemail').value;

	var data = JSON.stringify({
		"username": signupusername,
		"password": signuppassword,
		"email": signupemail
	  });
	  
	  var xhr = new XMLHttpRequest();
	  xhr.withCredentials = false;
	  
	  xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4) {
		  console.log(this.responseText);
		}
	  });
	  
	  xhr.open("POST", "https://interactivedev-6863.restdb.io/rest/user-account");
	  xhr.setRequestHeader("content-type", "application/json");
	  xhr.setRequestHeader("x-apikey", "<63e3b666478852088da67ec9>");
	  xhr.setRequestHeader("cache-control", "no-cache");
	  
	  xhr.send(data);
});

signInSubmit.addEventListener('click', () => {
	var data = null;
	const signinusername = document.getElementById('signinusername').value;
	const signinpassword = document.getElementById('signinpassword').value;

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = false;
	
	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
		console.log(this.responseText);
	  }
	});
	
	xhr.open("GET", "https://interactivedev-6863.restdb.io/rest/user-account");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.setRequestHeader("x-apikey", "<63e3b666478852088da67ec9>");
	xhr.setRequestHeader("cache-control", "no-cache");
	
	xhr.send(data);

	let signin=false;

	for (let i = 0; i < data.length; i++) {
		if(signinusername==data[i].username && signinpassword==data[i].password){
			alert("Signin successful! ");
			window.location.href="/shop.html";
			signin=true;
			break;
		}
		
	}
	if (signin==false){
		alert("Username or Password is incorrect! ");
	}
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	//API
	container.classList.remove("right-panel-active");

	
});