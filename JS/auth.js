function signup() {
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let fullname = document.getElementById('fullname').value;
    let businessName = document.getElementById('businessName').value;
    let address = document.getElementById('address').value;
    let password = document.getElementById('signupPassword').value;

    let user = {
        email: email,
        phone: phone,
        fullname: fullname,
        businessName: businessName,
        address: address,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));  // Storing the user data by email for easy retrieval
    alert('Signup successful!');
    window.location.href = './login.html';
}

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let storedUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUser && storedUser.email === username && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = './invoice.html';
    } else {
        alert('Invalid credentials!');
    }
}
