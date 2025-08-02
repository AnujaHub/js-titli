function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    if (includeLowerCase) allowedChars += lowerCaseChars;
    if (includeUpperCase) allowedChars += upperCaseChars;
    if (includeSymbols) allowedChars += symbolChars;
    if (includeNumbers) allowedChars += numberChars;

    if (length <= 0) {
        return "Password length must be at least 1.";
    }

    if (allowedChars.length === 0) {
        return "At least one set of characters needs to be selected.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Declare these **before** calling the function
const passwordLength = 12;
const includeLowerCase = false;
const includeNumbers = false;
const includeUpperCase = false;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);
