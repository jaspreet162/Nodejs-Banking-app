import styles from './newCustomer.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function NewCustomer() {
  const navigate=useNavigate();
  const [message, setMessage] = useState('');
  const piggylogo = require('../piggylogo.png');
  const onNewCustomer=e=>{
    e.preventDefault()
    console.log(e.target)

    const acId=e.target.acId.value
    const acNm=e.target.acNm.value
    const balance=e.target.balance.value

    console.log(`Id ${acId} Name ${acNm} bal ${balance}`)
    fetch('http://localhost:3100/create',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify({acId,acNm,balance})
    }).then(res=>res.json())
    .then(json => {
      console.log(json);
      if (json.sts === 'success') { // Assuming the response has a success field
        setMessage(`Your account is Created`);
      } else {
        setMessage('Failed to creating account');
      }
    }).catch(err => {
      console.error(err);
      setMessage('Error occurred while creating account');
    });

  }
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
</header>
  <div className={styles.custCont}>
  <div className={styles.txt}>Please Enter Account Number,Account Name and Amount to create an account</div>
  <form onSubmit={onNewCustomer}>
    <div><input type='number' placeholder='Account Id' name='acId'/></div>
    <div><input type='text' placeholder='Account Name' name='acNm'/></div>
    <div><input type='number' placeholder='Balance' name='balance'/></div>
    <div><input type='submit' placeholder='Create'/></div>
    </form>
    {message && <div className={styles.message}>{message}</div>}
    </div >
<footer>
           This is Banking System Project made by Jaspreet Kaur
    </footer></>
    
    )
}