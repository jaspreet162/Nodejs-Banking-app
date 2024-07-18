import styles from './Services.module.css'
import { useNavigate } from 'react-router-dom';
export function Services(){
    const navigate=useNavigate();
    const piggylogo = require('../piggylogo.png');
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
      </header><div className={styles.container}>
          <div className={styles.con1}> <div className={styles.heading} >What We Offer</div>
            <ul className={styles.data}><li><b className={styles.bold}>Secure Transactions:</b> Our advanced security measures ensure that your financial transactions are safe and protected at all times.</li>
              <li><b className={styles.bold}>User-Friendly Interface: </b>Our intuitive user interface makes banking easy, whether you are managing your finances on a computer or mobile device.</li>
              <li><b className={styles.bold}>Innovative Solutions:</b> We leverage the latest technological advancements to provide innovative banking solutions that cater to your unique needs.</li>
              <li><b className={styles.bold}>Customer Support: </b>Our dedicated customer support team is here to assist you with any queries or issues, ensuring a smooth banking experience.</li></ul>
          </div></div>
          <footer>
            This is Banking System Project made by Jaspreet Kaur
          </footer></>

)
}