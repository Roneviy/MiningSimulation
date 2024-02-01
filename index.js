const SHA256 = require("crypto-js/sha256");

const difficulty = '00'; // You can change the difficulty by modifying the number of zeros in the string.

const length = difficulty.length;
let counter = 0;

const block = {
    previousHash: "3a6b9a75c883d836b7d7b1cc48e4a19fd0c5b0f3",
    transactions: [
        { from: 'Bob', to: 'Alice', amount: 10 },
        { from: 'Alice', to: 'Sam', amount: 2 }
    ],
    timestamp: Date.now(),
    nonce: 0
};

function calculateHash() {
    const blockString = JSON.stringify(block);
    return SHA256(blockString).toString();
}

function mining() {
    let hash = calculateHash();

    while (hash.slice(0, length) !== difficulty) {
        block.nonce += 1;
        counter += 1;
        hash = calculateHash();
        console.log(`Attempt #${counter} new hash = ${hash}`);
    }
    return hash;
}

console.log("Mining started...");
const finalHash = mining();
console.log(`Mining completed after ${counter} attempts and the new block hash is = ${finalHash}`);