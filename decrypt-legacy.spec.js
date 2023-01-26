const assert = require('assert');
const { decrypt, encrypt } = require('./decrypt-legacy');
const { describe } = require('mocha');

describe('Testing Node.js createDecipheriv is able to decipher deprecated createCipher strings', () => {
    it('decrypted string should be the same', () => {
        // Arrange
        const someString = 'Some String';
        const encryptedString = encrypt(someString);

        // Act
        const decryptedString = decrypt(encryptedString);

        // Assert
        assert.equal(decryptedString, someString);
    });
});