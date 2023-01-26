/**
 * Demonstrates how to decrypt a string that was encrypted via Node.js Crypto createCipher.
 * 
 * https://nodejs.org/api/crypto.html#cryptocreatecipheralgorithm-password-options
 * https://github.com/nodejs/help/issues/1673#issuecomment-503222925
 */
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const inputEncoding = 'utf8';
const ivSize = 16;  // this size will depend on the algorithm used
const keySize = 32; // this size will depend on the algorithm used
const outputEncoding = 'hex';
const password = 'SECRET';

// Simulate EVP_BytesToKey
const bytes = Buffer.alloc(keySize + ivSize);
let lastHash = null, nBytes = 0;

while (nBytes < keySize + ivSize) {
    const hash = crypto.createHash('md5');
    if (lastHash) hash.update(lastHash);
    hash.update(password);
    lastHash = hash.digest();
    lastHash.copy(bytes, nBytes);
    nBytes += lastHash.length;
}

// Use these for decryption
const key = bytes.subarray(0, keySize);
const iv = bytes.subarray(keySize, keySize + ivSize);

const cipher = crypto.createCipher(algorithm, password);
const decipher = crypto.createDecipheriv(algorithm, key, iv);

const decrypt = (text) => {
    let decrypted = decipher.update(text, outputEncoding, inputEncoding);
    decrypted += decipher.final(inputEncoding)
    return decrypted;
};

const encrypt = (text) => {
    let encrypted = cipher.update(text, inputEncoding, outputEncoding);
    encrypted += cipher.final(outputEncoding);
    return encrypted;
}

module.exports = {
    decrypt,
    encrypt
}