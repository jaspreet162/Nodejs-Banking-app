import styles from './transfer.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Transfer(){
  const navigate=useNavigate();
  const [message, setMessage] = useState('');
  const piggylogo = require('../piggylogo.png');

  const onTransfer=e=>{
    e.preventDefault()
    console.log(e.target)

    const srcId=e.target.srcId.value
    const destId=e.target.destId.value
    const amount=e.target.amount.value

    console.log(`Source Id ${srcId} , Destination Id ${destId} amount ${amount}`)
    fetch('http://localhost:3100/transfer',{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify({srcId,destId,amount})
    }).then(res=>res.json())
    .then(json => {
      console.log(json);
      if (json.sts === 'success') { // Assuming the response has a success field
        setMessage(`INR:${amount} is transferred successfully `);
      } else {
        setMessage('Failed to deposit amount');
      }
    }).catch(err => {
      console.error(err);
      setMessage('Error occurred while depositing amount');
    });
};

  
    return(
      <><header>
      <div className={styles.logopart}>
        <img className={styles.logo} src={piggylogo} alt="PiggyBank" />
        <b className={styles.comp}>TSF BANK</b>
      </div>
      <div className={styles.nav}>
        <ul>

        <div><li onClick={() => navigate('/')}>Home</li></div>
          <div><li onClick={() => navigate('/AboutUs')}>About Us</li></div>
          <div><li onClick={() => navigate('/ContactUs')}>Contact Us</li></div>
          <div><li onClick={() => navigate('/Services')}>Services</li></div>
        </ul>
      </div>
    </header>
      <div className={styles.trnCont}>
      <div className={styles.txt}>Please Enter Source Account Number,Destination Account Number and Amount to Transfer</div>
      <form onSubmit={onTransfer}>
        <div><input type='number' placeholder='Source Id' name='srcId'/></div>
        <div><input type='number' placeholder='Destination Id' name='destId'/></div>
        <div><input type='number' placeholder='Amount' name='amount'/></div>
        <div><input type='submit' placeholder='Transfer'/></div>
        </form>
        {message && <div className={styles.message}>{message}</div>}
        </div >
        <footer>
           This is Banking System Project made by Jaspreet Kaur
    </footer></>
    )
}