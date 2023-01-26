# Node-Legacy-Crypto

## General Info

Demonstrates the old way of encrypting/decrypting a string via Node.js `crypto.createCipher` and `crypto.createDecipher`, in addition to decrypting an older string that was generated via `crypto.createCipher` using the new `crypto.createDecipheriv` method. 

It is strongly advised to generate a new encrypted string via `crypto.createCipheriv`...but sometimes that option isn't always available.
