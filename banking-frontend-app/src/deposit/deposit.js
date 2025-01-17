import styles from './deposit.module.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export function Deposit() {
  const navigate=useNavigate();
  const [message, setMessage] = useState('');
  const piggylogo = require('../piggylogo.png');
  const onDeposit = e => {
    e.preventDefault()
    console.log(e.target)

    const acId = e.target.acId.value

    const amount = e.target.amount.value

    console.log(`Id ${acId} amount ${amount}`)
    fetch('https://nodejs-banking-app-backend.onrender.com/deposit', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ acId, amount })
    }).then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.sts === 'success') { // Assuming the response has a success field
          setMessage(`INR:${amount} is deposited successfully`);
        } else {
          setMessage('Failed to deposit amount');
        }
      }).catch(err => {
        console.error(err);
        setMessage('Error occurred while depositing amount');
      });
  };

  return (
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
    </header><div className={styles.depCont}>
        <div className={styles.txt}>Please Enter Account Number and Amount to make a Deposit</div>
        <form onSubmit={onDeposit}>
          <div className={styles.no}><input type='number' placeholder='Enter Account Number' name='acId' /></div>
          <div className={styles.no}><input  type='number' placeholder='Enter Amount' name='amount' /></div>
          <div><input  type='SUBMIT' placeholder='Deposit' />
          </div>
        </form>
        {message && <div className={styles.message}>{message}</div>}
      </div> 
    <footer>
           This is Banking System Project made by Jaspreet Kaur
    </footer></>
  )
}
