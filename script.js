document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginPopup').style.display = 'block';
}

document.getElementById('closePopup').onclick = function() {
    document.getElementById('loginPopup').style.display = 'none';
}

document.getElementById('submitLogin').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginPopup').style.display = 'none';
        document.getElementById('welcomePopup').style.display = 'block';
    } else {
        alert('Please enter both username and password.');
    }
}

document.getElementById('closeWelcome').onclick = function() {
    document.getElementById('welcomePopup').style.display = 'none';
}

document.getElementById('continueBtn').onclick = function() {
    document.getElementById('welcomePopup').style.display = 'none';
    alert('Welcome to the shop! Start shopping now!');
}