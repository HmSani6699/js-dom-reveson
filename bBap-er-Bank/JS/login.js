document.getElementById('button').addEventListener('click', function () {
    const emailInput = document.getElementById('yserEmail');
    const passwordInput = document.getElementById('yserPassword');
    if (emailInput.value == 'hmsani120@gmail.com' && passwordInput.value == '12345') {
        window.location.href + 'bank.html';
    }
})