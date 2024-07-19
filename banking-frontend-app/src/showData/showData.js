import React, { useEffect, useState } from 'react';
import styles from './showData.module.css';
import { useNavigate } from 'react-router-dom';

export function ShowData() {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const piggylogo = require('../piggylogo.png');

  useEffect(() => {
    fetch(`https://nodejs-banking-app-backend.onrender.com/showData`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);

        setData(data.rows); // Assuming the data returned has a 'rows' field containing the table data
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
else{
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
      <table className={styles.table}>
        <thead>
          <tr>
            {Array.isArray(data) && data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <footer>
           This is Banking System Project made by Jaspreet Kaur
    </footer></>
  );
}
}
