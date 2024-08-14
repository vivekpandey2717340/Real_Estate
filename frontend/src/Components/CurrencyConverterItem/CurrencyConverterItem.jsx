import React, { useState, useEffect } from 'react';
import './CurrencyConverterItem.css'

const CurrencyConverterItem = () => {
  const [gbp, setGbp] = useState(0);
  const [usd, setUsd] = useState(0);
  const [aud, setAud] = useState(0);
  const [inr, setInr] = useState(0);
  const [cny, setCny] = useState(0);
  const [jpy, setJpy] = useState(0);
  const [npr, setNpr] = useState(0);

  const formatNumber = (num) => parseFloat(num).toFixed(2);

  const exchangeRates = {
    GBP: 172.94, // Example rate: 1 GBP = 160.50 NPR
    USD: 133.74, // Example rate: 1 USD = 120.75 NPR
    AUD: 89.10,  // Example rate: 1 AUD = 80.45 NPR
    INR: 1.60,   // Example rate: 1 INR = 1.60 NPR
    CNY:18.39,  // Example rate: 1 CNY = 17.55 NPR
    JPY: 0.85   // Example rate: 1 JPY = 0.88 NPR
  };

  useEffect(() => {
    const totalNpr = (gbp * exchangeRates.GBP) + 
                     (usd * exchangeRates.USD) + 
                     (aud * exchangeRates.AUD) + 
                     (inr * exchangeRates.INR) + 
                     (cny * exchangeRates.CNY) + 
                     (jpy * exchangeRates.JPY);
    setNpr(formatNumber(totalNpr));
  }, [gbp, usd, aud, inr, cny, jpy]);

  const clearAllInputs = () => {
    setGbp(0);
    setUsd(0);
    setAud(0);
    setInr(0);
    setCny(0);
    setJpy(0);
    setNpr(0);
  };

  return (
    <div className='currency_converter_grid'>
      <div className='currency_converter_grid_box'>
        <h2>Currency Converter</h2>
        <div style={{width:'100%',marginTop:'10px'}}>
          <div className='currency_grid'>
            <div>
              <label>GBP</label><br />
              <input type="number" value={gbp} onChange={(e) => setGbp(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>USD</label><br />
              <input type="number" value={usd} onChange={(e) => setUsd(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>AUD</label><br />
              <input type="number" value={aud} onChange={(e) => setAud(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>INR</label><br />
              <input type="number" value={inr} onChange={(e) => setInr(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>CNY</label><br />
              <input type="number" value={cny} onChange={(e) => setCny(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>JPY</label><br />
              <input type="number" value={jpy} onChange={(e) => setJpy(parseFloat(e.target.value) || 0)} />
            </div>
          </div>
          <div className='npl'>
            <label><span>NPR</span></label><br />
            <input type="number" value={npr} readOnly />
          </div>
          <button onClick={clearAllInputs}>Clear All</button>
        </div>
        
      </div>
      <div className='excahnge_info'>
        <div className='excahnge_info_box'>
          <h2>At Exchange Rate Of</h2>
          <table>
            <tr>
              <td className='table_right'>1 Japanese Yen equals :</td>
              <td><span>NRP</span> 0.85</td>
            </tr>
            <tr>
              <td className='table_right'>1 United States Dollar equals :</td>
              <td><span>NRP</span> 133.74</td>
            </tr>
            <tr>
              <td className='table_right'>1 Australian Dollar equals :</td>
              <td><span>NRP</span> 89.08</td>
            </tr>
            <tr>
              <td className='table_right'>1 Indian Rupee equals :</td>
              <td><span>NRP</span> 1.60</td>
            </tr>
            <tr>
              <td className='table_right'>1 Chinese Yuan equals :</td>
              <td><span>NRP</span> 18.39</td>
            </tr>
            <tr>
              <td className='table_right'>1 British Pounds  equals :</td>
              <td><span>NRP</span> 173.02</td>
            </tr>

          </table>
        </div>

      </div>
    </div>
  );
};

export default CurrencyConverterItem;
