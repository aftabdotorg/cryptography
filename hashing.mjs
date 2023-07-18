import crypto from 'crypto';

// ! no decryption in hashing (one way)
// ! standard hashing algo - size of actual key

const algorithm = 'sha256';
const key = crypto.randomBytes(32);

const hash = crypto.createHash(algorithm, key).update('test').digest('hex');
const hash1 = crypto.createHash(algorithm, key).update('test').digest('hex');

console.log(hash);
console.log(hash1);

// ! can be used to cross check pass
