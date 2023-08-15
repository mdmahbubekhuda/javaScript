// login system
document.getElementById('btn-submit').addEventListener('click', function (event) {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    // verification 
    (userEmail === 'ronok@rnk.com' && userPassword === 'rnk123') ? window.location.href = 'bank.html' : alert('Incorrect email or password! Please try again...');
});