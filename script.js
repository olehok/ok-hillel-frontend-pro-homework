const form = document.querySelector('.form');
const userData = {};
const emailRx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telRx = /^\+380\d{9}$/;


function validateForm() {
    let isValid = true;

    if (!userData.name) {
        form.querySelector('#nameEr').innerText = 'Name is required';
        isValid = false;
    } else if (23 < userData.name.length || userData.name.length < 2) {
        form.querySelector('#nameEr').innerText = 'Name from 2 to 22 char is required';
        isValid = false;
    }

    if (!userData.comment) {
        form.querySelector('#textAreaEr').innerText = 'Comment is required';
        isValid = false;
    } else if (userData.comment.length < 5 || userData.comment.length > 100) {
        form.querySelector('#textAreaEr').innerText = 'Min 5 max 100 char comment is required';
        isValid = false;
    }

    if (!userData.tel) {
        form.querySelector('#telEr').innerText = 'Tel is required';
        isValid = false;
    } else if (!telRx.test(userData.tel)) {
        form.querySelector('#telEr').innerText = 'Number is not valid';
        isValid = false;
    }

    if (!userData.email) {
        form.querySelector('#emailEr').innerText = 'Email is required';
        isValid = false;
    } else if (!emailRx.test(userData.email)) {
        form.querySelector('#emailEr').innerText = 'Email is not valid';
        isValid = false;
    }
    console.log(isValid);
    return isValid;
}

function clearErrors() {
    form.querySelectorAll('.error').forEach(i => i.innerText = '');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    userData.name = form.querySelector('#name').value.trim();
    userData.tel = form.querySelector('#tel').value.trim();
    userData.email = form.querySelector('#email').value.trim();
    userData.comment = form.querySelector('#textArea').value.trim();

    if (validateForm()) {
        form.querySelector('.submitted').innerText = 'Data submitted!';
        console.log('User data:', userData);
    }
});