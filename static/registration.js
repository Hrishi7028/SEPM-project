console.log("hello form registration");

function validation(){
    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let city = document.getElementById('city').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    if (name == "") {
        document.getElementById("username").innerHTML="Please Enter Your Name";
        return false;
    }
    if (tel == "") {
        document.getElementById("atel").innerHTML = "Please Enter your mobile Number"
        return false;
    }
    if (tel.length <10) {
        document.getElementById("atel").innerHTML = "Please enter 10 digit number";
        return false;
    }
    if (isNaN(tel)) {
        document.getElementById("atel").innerHTML = "Please enter valid digits";
        return false;
    }
    if (city == "") {
        document.getElementById("acity").innerHTML = "Please Enter your city name";
        return false;
    }
    if (pass == "") {
        document.getElementById("apass").innerHTML = "Please Enter password";
        return false;
    }
    if (pass.length <6 && pass.length >12) {
        document.getElementById("apass").innerHTML = "Please Enter correct length of password";
        return false;
    }
    if (pass != cpass) {
        document.getElementById("apass").innerHTML = "Password is not matching";
        return false;
    }

}