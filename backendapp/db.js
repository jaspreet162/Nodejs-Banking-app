const { Client } = require('pg')
require('dotenv').config();
const clientConfig= {
max:5,
min:2,
idleTimeoutMillis:6000
};

const host= process.env.PG_HOST;
const user= process.env.PG_USER;
const password= process.env.PG_PASSWORD;
const database= process.env.PG_DATABASE;
const port=  process.env.PG_PORT;


clientConfig.connectionString=`postgres://${user}:${password}@${host}:${port}/${database}`;

const client = new Client(clientConfig);
// client.connect(err => {
//     if (err) {
//         console.log('\n error in connectivity')
//         return
//     } console.log('\n connection successfull');
// });

const createNewAccount = ({ acId, acNm, balance },onCreate=undefined) => {
    client.query(`INSERT INTO account VALUES ($1,$2,$3)`, [acId, acNm, balance], (err, res) => {
        if (err) {
            console.log(`\n problem in creating customer`, err)
        }
        else {
            console.log(`\n customer created successfully`)
              if(onCreate){
                onCreate(`customer created successfully`)
              }
        }

    });
}


const withdraw = ({ acId, amount },onWithdraw=undefined) => {
    client.query(`SELECT balance FROM account WHERE Account_Number=$1`, [acId], (err, res) => {
        const balance = parseFloat(res.rows[0].balance)

        if (err) {
            console.log(`\n Problem in Depositing`, err)
        }
        else {
            const balance = parseFloat(res.rows[0].balance);
            const newBalance = balance - parseFloat(amount);


            client.query(`update account set balance = $1 where Account_Number = $2`, [newBalance, acId], (err, res) => {
                if (err) {
                    console.log(`\n Problem in withdrawal`, err)
                }
                else {
                    console.log(`\n Amount ${amount} withdrawal successfully`)
                    if(onWithdraw){
                        onWithdraw(`Amount ${amount} withdrawal successfully`)
                    }
                }
            })
        }
    })

};

const deposit = ({ acId, amount },onDeposit=undefined) => {
    client.query(`SELECT balance FROM account WHERE Account_NUmber=$1`, [acId], (err, res) => {
        if (err) {
            console.log(`\n Problem in Depositing`, err)
        }
        else {
            const balance = parseFloat(res.rows[0].balance);
            const newBalance = balance + parseFloat(amount);


            client.query(`update account set balance = $1 where Account_Number = $2`, [newBalance, acId], (err, res) => {
                if (err) {
                    console.log(`\n Problem in Depositing`, err)
                }
                else {
                    console.log(`\n Amount ${amount} deposited successfully`)
                    if(onDeposit){
                        onDeposit(`Amount ${amount} deposited successfully`)
                    }
                }

            })
        }
    })

};
const transfer = ({ srcId, destId, amount },OnTransfer=undefined) => {

    withdraw({ acId: srcId, amount },msgWd=>{
        deposit({ acId: destId, amount },msgDp=>{
         if(OnTransfer){
            OnTransfer(`Amount ${amount} transferred successfully`)
         }
        })
    })
};


const balance = ({ acId }, OnBalance=undefined) => {
    client.query(`SELECT balance, account_name FROM account WHERE account_number= $1`, [acId], (err, res) => {
        if (err) {
            console.log(`\n Problem in fetching account balance`, err);
            OnBalance(err, null, null);
        } else {
            if (res.rows.length > 0) {
                const balance = parseFloat(res.rows[0].balance);
                const acNm = res.rows[0].account_name;
                console.log(`\n Your Existing Balance is ${balance} and name is ${acNm}`);
                if (OnBalance) {
                    OnBalance(null, balance, acNm);
                }
            } else {
                console.log(`\n Account with ID ${acId} not found`);
                OnBalance(new Error("Account not found"), null, null);
            }
        }
    });
};

const showData=()=>{
    client.query(`SELECT * from account`,(err,res)=>{
        if(!err){
            console.log(res.rows);
        }else{
            console.log(err.message);
        }
    })
};

module.exports = {
    createNewAccount, withdraw, deposit, transfer, balance, showData,client
}

// createNewAccount({acId:1,acNm:'abc',balance:100})
// withdraw({acId:2,amount:500});
// deposit({acId:1,amount:2000});
// transfer({srcId:1,destId:2,amount:500})
// balance({acId:1})

