
import styles from './AboutUs.module.css'
import { useNavigate } from 'react-router-dom';
export function AboutUs() {
    const navigate = useNavigate();
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
                <div className={styles.con1}> <div className={styles.h2}>Welcome to TSF BANK</div>
                At TSF BANK, we are dedicated to providing exceptional banking services 
                tailored to meet the diverse needs of our customers. Our state-of-the-art 
                banking system, built using cutting-edge technologies such as Node.js, React, 
                and Express, with a robust PostgreSQL database, ensures a seamless and secure 
                banking experience.</div>
                <div className={styles.con1}><div className={styles.h2}>Our Mission</div>
                Our mission is to empower individuals and businesses by offering innovative and reliable
                financial solutions. We aim to make banking simple, accessible, and efficient for everyone,
                 fostering financial growth and stability.</div>
                <div className={styles.con1}><div className={styles.h2}>Our Vision</div>
                We envision a future where banking is effortless, personalized, and secure. 
                We strive to be a leader in the digital banking landscape, continuously enhancing 
                our services and technologies to exceed our customers' expectations.</div>
            </div>
            <footer>
                This is Banking System Project made by Jaspreet Kaur
            </footer></>
    )
}