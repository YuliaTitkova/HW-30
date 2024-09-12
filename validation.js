// validation.js
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidUrl(url) {
    const urlRegex = /^(https?:\/\/)?(www\.)?[^\s@]+\.[^\s@]+$/;
    return urlRegex.test(url);
}
