// index.js
import { isValidEmail, isValidUrl } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
    const emailButton = document.getElementById('emailButton');
    const emailInput = document.getElementById('emailInput');
    const emailResult = document.getElementById('emailResult');

    const urlButton = document.getElementById('urlButton');
    const urlInput = document.getElementById('urlInput');
    const urlResult = document.getElementById('urlResult');

    emailButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (isValidEmail(email)) {
            emailResult.textContent = 'Valid email address!';
            emailResult.style.color = 'green';
        } else {
            emailResult.textContent = 'Invalid email address.';
            emailResult.style.color = 'red';
        }
    });

    urlButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (isValidUrl(url)) {
            urlResult.textContent = 'Valid URL!';
            urlResult.style.color = 'green';
        } else {
            urlResult.textContent = 'Invalid URL.';
            urlResult.style.color = 'red';
        }
    });
});
