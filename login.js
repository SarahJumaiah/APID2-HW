document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); //لايسوي سبمت على طول

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let messageElement = document.getElementById('message');

    fetch('https://66e7e68bb17821a9d9da6e50.mockapi.io/login')
    .then(response => response.json())
    .then(users => {
        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            window.location.href = `personal.html?email=${encodeURIComponent(email)}`;
        } else {
            messageElement.textContent = 'Wrong email or password.';
        }
    })
});
