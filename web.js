const express=require('express')
const app=express()
const port=3100
const cors=require('cors')
app.use(cors())
const { createNewAccount, withdraw, deposit, transfer, balance, showData,client } = require('./db')


app.post('/create',express.json(),(req,res)=>{
    createNewAccount(req.body,msg=>{
        res.json({'sts':'success',msg })
    })
})

app.put('/withdraw',express.json(),(req,res)=>{
    withdraw(req.body,msg=>{
        res.json({'sts':'success',msg })
    })
})

app.put('/deposit',express.json(),(req,res)=>{
    deposit(req.body, msg=>{
        res.json({'sts':'success',msg });
        
    })
    
   
})
app.put('/transfer',express.json(),(req,res)=>{
    transfer(req.body,msg=>{
        res.json({'sts':'success',msg })
    })
})

app.get('/showData', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM account');
      res.json({ rows: result.rows });
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/balance/:acId', (req, res) => {
    const acId = req.params.acId;
    

    balance({acId}, (err, balance, name) => {
        if (err) {
            console.error('Error retrieving balance:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json({
            bal: balance,
            acNm: name
        });
    });
});

app.listen(port,()=>{
    console.log(`Example app learning on ${port}`)
})

