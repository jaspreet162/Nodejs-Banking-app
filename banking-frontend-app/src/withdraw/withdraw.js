import styles from './withdraw.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Withdraw(){
  const navigate=useNavigate();
  const [message, setMessage] = useState('');
  const piggylogo = require('../piggylogo.png');
  const onWithdraw=e=>{
    e.preventDefault()
    console.log(e.target)

    const acId=e.target.acId.value
    
    const amount=e.target.amount.value

    console.log(`Id ${acId} amount ${amount}`)
    fetch('http://localhost:3100/withdraw',{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify({acId,amount})
    }).then(res=>res.json())
    .then(json => {
      console.log(json);
      if (json.sts === 'success') { // Assuming the response has a success field
        setMessage(`INR:${amount} is withdrawn successfully`);
      } else {
        setMessage('Failed to withdrawing amount');
      }
    }).catch(err => {
      console.error(err);
      setMessage('Error occurred while withdrawing amount');
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
      <div className={styles.withCont}>
      <div className={styles.txt}>Please Enter Account Number and Amount to make a Withdrawal</div>
      <form onSubmit={onWithdraw}>
        <div><input type='number' placeholder='Account Id' name='acId'/></div>
        <div><input type='number' placeholder='Amount' name='amount'/></div>
        <div><input type='submit' placeholder='Withdraw'/></div>
        </form>
        {message && <div className={styles.message}>{message}</div>}
        </div >
    <footer>
      This is Banking System Project made by Jaspreet Kaur
</footer></>
    )
}
