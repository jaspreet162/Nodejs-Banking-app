const readline = require('readline');//importing the module(built in library accessing)
const { createNewAccount, withdraw, deposit, transfer, balance,showData } = require('./db')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome To The Banking System');
console.log('\n 1. Create new account');
console.log('\n 2. Deposit Money');
console.log('\n 3. Withdraw Money');
console.log('\n 4. Check Balance');
console.log('\n 5. Transfer Money');
console.log('\n 6. View All Customers');
console.log('\n 7. Exit');

const ip = (msg) => {
    return new Promise((resolve, reject) => {
        rl.question(`\n ${msg}:`, (ch) => {
            resolve(ch)
        })
    })
}

const start = async () => {
    while (true) {
        const choice = await ip('Enter your Choice:')

        if (choice == 1) {
            console.log(`create account`)
            const acId = parseInt(await ip('Enter account Id'))
            const acNm = await ip('Enter Account Name')
            const balance = 0;
            createNewAccount({ acId, acNm, balance: 0 })
        }
        else if (choice == 2) {
            console.log(`Deposit Money`)
            const acId = parseInt(await ip('Enter account Id'))
            const amount = parseFloat(await ip('Enter amount'))
            deposit({ acId, amount })
        }
        else if (choice == 3) {
            console.log(`Withdraw Money`)
            const acId = parseInt(await ip('Enter account Id'))
            const amount = parseFloat(await ip('Enter amount'))
            withdraw({ acId, amount })
        }
        else if (choice == 4) {
            console.log(`Check Balance`)
            const acId = parseInt(await ip('Enter account Id'))
            balance({ acId })
        }
        else if (choice == 5) {
            console.log(`Please Transfer Money`)
            const srcId = parseInt(await ip('Enter source account Id'))
            const destId = parseInt(await ip('Enter destination account Id'))
            const amount = parseFloat(await ip('Enter amount'))
            transfer({ srcId, destId, amount })

        }
        else if (choice == 6) {
            showData();
            
        }
        else {
            console.log(`Bye Bye`)
            process.exit()
        }
    }
}

start()