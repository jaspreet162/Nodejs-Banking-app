import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import { Dashboard } from './dashboard/dashboard'
import { Deposit } from './deposit/deposit'
import { Withdraw } from './withdraw/withdraw'
import { Transfer } from './transfer/transfer'
import { NewCustomer } from './newCustomer/newCustomer'
import { Balance } from './balance/balance'
import { ShowData } from './showData/showData'
import { AboutUs } from './aboutus/AboutUs'
import {ContactUs} from './contactus/ContactUs'
import {Services} from './services/Services'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<NewCustomer />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/transfer" element={<Transfer/>} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/showData" element={<ShowData />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Services" element={<Services />} />
   

    </Routes></BrowserRouter>
);
