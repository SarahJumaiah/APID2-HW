let usernameElement = document.getElementById('username');
let urlParams = new URLSearchParams(window.location.search);
let email = urlParams.get('email');

if (!email) {
    window.location.href = 'login.html';
} else {
    fetch('https://66e7e68bb17821a9d9da6e50.mockapi.io/login')
    .then(response => response.json())
    .then(users => {
        let user = users.find(u => u.email === email);

        if (user && user.name) {
            usernameElement.textContent = `Hello, ${user.name}`;
        } else {
            window.location.href = 'login.html';
        }
    })
}

document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
