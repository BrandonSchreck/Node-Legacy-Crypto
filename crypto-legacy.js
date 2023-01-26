/**
 * Demonstrates how to encrypt/decrypt using deprecated Node.js Crypto createCipher/createDecipher.
 * 
 * https://nodejs.org/api/crypto.html#cryptocreatecipheralgorithm-password-options
 * https://nodejs.org/api/crypto.html#crypto_crypto_createdecipher_algorithm_password_options
 */
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const inputEncoding = 'utf8';
const outputEncoding = 'hex';
const password = 'SECRET';

const cipher = crypto.createCipher(algorithm, password);
const decipher = crypto.createDecipher(algorithm, password);

const decrypt = (text) => {
    let decrypted = decipher.update(text, outputEncoding, inputEncoding);
    decrypted += decipher.final(inputEncoding)
    return decrypted;
};

const encrypt = (text) => {
    let encrypted = cipher.update(text, inputEncoding, outputEncoding);
    encrypted += cipher.final(outputEncoding);
    return encrypted;
};

module.exports = {
    decrypt,
    encrypt
}