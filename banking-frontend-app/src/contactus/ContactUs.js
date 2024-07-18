import styles from './ContactUs.module.css'
import { useNavigate } from 'react-router-dom';
export function ContactUs(){
    const navigate=useNavigate();
    const piggylogo = require('../piggylogo.png');
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
      <div className={styles.container}>
                <div className={styles.con}> <div className={styles.h2}>We're Here to Help</div>
                At TSF Bank, your satisfaction and financial well-being are our top priorities.
                If you have any questions, concerns, or need assistance with our services, please don't hesitate to reach out to us.</div>
                <div className={styles.con1}><div className={styles.h2}>How to Reach Us</div>
                Customer Support
        Our customer support team is available to assist you with any inquiries you may have.
        <ul className={styles.data1}><li>Phone: 1-800-123-4567</li>
        <li>Email: support@TSFBank.com</li>
        <li>Live Chat: Available on our website from 8:00 AM to 8:00 PM,Monday to Friday</li></ul></div>
        <div className={styles.con1}><div className={styles.h2}>Our Vision</div>
                Stay connected with us on social media for the latest updates, news, and financial tips:

                <ul className={styles.data1}>
        <li>Twitter: twitter.com/TSFBank</li>
        <li>LinkedIn: linkedin.com/company/TSFBank</li>
        <li>Instagram: instagram.com/TSFBank</li></ul></div>
            
      </div>
      <footer>
               This is Banking System Project made by Jaspreet Kaur
        </footer></>
    )
    }