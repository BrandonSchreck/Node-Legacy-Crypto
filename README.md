# Node-Legacy-Crypto

## General Info

Demonstrates the old way of encrypting/decrypting a string via Node.js `crypto.createCipher` and `crypto.createDecipher`, in addition to decrypting an older string that was generated via `crypto.createCipher` using the new `crypto.createDecipheriv` method. 

It is strongly advised to generate a new encrypted string via `crypto.createCipheriv`...but sometimes that option isn't always available.

## Technologies

This should work with Node.js v10-18. Tested locally with v18.13.0.

## Setup

Ensure all npm packages are installed by running: `npm i`

Three scripts are included:

    "start:deprecated": "node ./crypto-legacy.js", -- runs deprecated encrypt/decrypt with createCipher and createDecipher
    "start:decryptiv": "node ./crypto-legacy.js",  -- runs deprecated encrypt createCipher but uses createDecipheriv to decrypt
    "test": "mocha ./**/*.spec.js"                 -- unit tests showing the code works