import { useState  } from "react"
import styles from './balance.module.css'
import { useNavigate } from 'react-router-dom';
export function Balance(){
  const navigate=useNavigate();
  const piggylogo = require('../piggylogo.png');
  const [bal,setBal]=useState(0)
  const [acNm, setName] = useState("");
  
  const onBalance=e=>{
    e.preventDefault()
    

    const acId=e.target.acId.value
    
   
   

    console.log(`Id ${acId},name ${acNm}`)
    fetch(`http://localhost:3100/balance/${acId}`)
    .then(res=>res.json())
    .then(json=>{setBal(json.bal)
             setName(json.acNm)
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
    <div className={styles.balCont}>
   <div className={styles.txt}>Name : {acNm}     Balance : {bal}
   </div>
    <form onSubmit={onBalance}>
      <div ><input type='number' placeholder='Account Id' name='acId'/></div>
      <div><input type='submit' value='Balance'/></div>
      </form>
      </div >
      <footer>
           This is Banking System Project made by Jaspreet Kaur
    </footer></>
  )
}