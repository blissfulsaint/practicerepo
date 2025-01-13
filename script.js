const input = document.getElementById('number');

input.addEventListener('input', () => {
    const value = parseInt(input.value);
    const output = document.getElementById('output')

    if (isNaN(value)) {
        output.textContent = 'Please enter a number';
        output.classList.remove('red');
        output.classList.remove('green');
        return;
    }

    if (isPrime(value)) {
        output.textContent = 'Prime';
        output.classList.remove('red');
        output.classList.add('green');
    } else {
        output.textContent = 'Not Prime';
        output.classList.add('red');
        output.classList.remove('green');
    }
});

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}