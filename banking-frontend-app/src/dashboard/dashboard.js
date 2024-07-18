import styles from './dashboard.module.css';
import { useNavigate } from 'react-router-dom';


export function Dashboard(){
  const navigate=useNavigate()
  const piggylogo = require('../piggylogo.png');
  const coin=require('./money.png');
  
    return(
      <>
      <header>
        <div className={styles.logopart}>
          
          <img className={styles.logo} src={piggylogo} alt="PiggyBank" />
          <b className={styles.comp}>TSF BANK</b></div>
        
        <div className={styles.nav}>
          <ul>

          <div><li onClick={() => navigate('/')}>Home</li></div>
          <div><li onClick={() => navigate('/AboutUs')}>About Us</li></div>
          <div><li onClick={() => navigate('/ContactUs')}>Contact Us</li></div>
          <div><li onClick={() => navigate('/Services')}>Services</li></div>
          </ul>
        </div>
      </header>
      <div className={styles.lr}>
      <div className={styles.wbimg}><img className={styles.wb} src={coin} alt="saveforfuture"></img></div>
      <div className={styles.dashcont}>
         <div className={styles.con1}> <div className={styles.containers} onClick={() => navigate('/create')}>
            CREATE NEW CUSTOMER
          </div>
          <div className={styles.containers} onClick={() => navigate('/balance')}>
            CUSTOMER DETAILS
          </div></div>
          <div className={styles.con2}><div className={styles.containers} onClick={() => navigate('/withdraw')}>
            WITHDRAW
          </div>
          <div className={styles.containers} onClick={() => navigate('/deposit')}>
            DEPOSIT
          </div></div>
          <div className={styles.con3}><div className={styles.containers} onClick={() => navigate('/transfer')}>
            TRANSFER
          </div>
          <div className={styles.containers} onClick={() => navigate('/showData')}>
            VIEW ALL CUSTOMERS
          </div></div></div></div>
      <footer>
           This is Banking System Project made by Jaspreet Kaur
      </footer></>);
};