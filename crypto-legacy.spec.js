const assert = require('assert');
const { decrypt, encrypt } = require('./crypto-legacy');
const { describe } = require('mocha');

describe('Testing Node.js Deprecated createCipher/createDecipher', () => {
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