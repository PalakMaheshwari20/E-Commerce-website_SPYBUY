//redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

//select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;

submitBtn.addEventListener('click', () => {
    if(name != null){   //sign up page
        if(name.value.length < 3){
            showAlert('Name must be 3 letters long');
        } else if(allLetter(name)){ 
            showAlert('Enter valid name');
        } else if(!email.value.length){
            showAlert('Enter your email');
        } else if(password.value.length < 8){
            showAlert('Password should be 8 letters long');
        } else if(confirmPassword.value.length < 8){
            showAlert('Enter confirm password');
        } else if(confirmPassword.value != password.value){
            showAlert('Confirm password and password are not same'); 
        } else if(!number.value.length){
            showAlert('Enter your phone number');
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('Invalid number, please enter valid one');
        } else if(!tac.checked){
            showAlert('You must agree to our terms and conditions');
        } else{ 
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                seller: false
            })
        }
    } else{
        //login page
        if(!email.value.length || !password.value.length){
            showAlert('Fill all the inputs');
        } else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })    
        }
    }
})

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
    {
      return false;
     }
   else
     {
     return true;
     }
  }
/*
function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
  */