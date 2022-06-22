const form = document.getElementById('form');
const username = document.getElementById('username');

const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const usernameValue = username.value.trim();
   
    const passwordValue = password.value.trim();
   

    if(usernameValue === null || usernameValue==='') {
        setError(username, 'Username can not be blank');
        return false;
    }else{
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password can not be blank');
        return false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
        return false;
    } else{
        open('file:///E:/website/Restaurent/Restaurent%20pic/awe.html');
        setSuccess(username);
        setSuccess(password);
    }


};
