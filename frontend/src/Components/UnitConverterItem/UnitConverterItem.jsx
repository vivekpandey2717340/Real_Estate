import React, { useState, useEffect } from 'react';
import './UnitConverterItem.css'

const UnitConverterItem = () => {
  const [rohani, setRohani] = useState(0);
  const [aana, setAana] = useState(0);
  const [paisa, setPaisa] = useState(0);
  const [daam, setDaam] = useState(0);
  const [bigha, setBigha] = useState(0);
  const [kattha, setKattha] = useState(0);
  const [dhur, setDhur] = useState(0);
  const [sqFeet, setSqFeet] = useState(0);
  const [sqMeter, setSqMeter] = useState(0);

  const formatNumber = (num) => parseFloat(num).toFixed(3);

  useEffect(() => {
    const sqFeetHilly = rohani * 5476 + aana * 342.25 + paisa * 85.56 + daam * 21.39;
    const sqMeterHilly = sqFeetHilly * 0.092903;

    if (rohani || aana || paisa || daam) {
      setSqFeet(parseFloat(formatNumber(sqFeetHilly)));
      setSqMeter(parseFloat(formatNumber(sqMeterHilly)));
    }
  }, [rohani, aana, paisa, daam]);

  useEffect(() => {
    const sqFeetTerai = bigha * 72900 + kattha * 3645 + dhur * 182.25;
    const sqMeterTerai = sqFeetTerai * 0.092903;

    if (bigha || kattha || dhur) {
      setSqFeet(parseFloat(formatNumber(sqFeetTerai)));
      setSqMeter(parseFloat(formatNumber(sqMeterTerai)));
    }
  }, [bigha, kattha, dhur]);

  useEffect(() => {
    if (sqFeet === 0) return;

    const rohaniEquivalent = Math.floor(sqFeet / 5476);
    const aanaEquivalent = Math.floor((sqFeet % 5476) / 342.25);
    const paisaEquivalent = Math.floor(((sqFeet % 5476) % 342.25) / 85.56);
    const daamEquivalent = (((sqFeet % 5476) % 342.25) % 85.56) / 21.39;

    setRohani(parseFloat(formatNumber(rohaniEquivalent)));
    setAana(parseFloat(formatNumber(aanaEquivalent)));
    setPaisa(parseFloat(formatNumber(paisaEquivalent)));
    setDaam(parseFloat(formatNumber(daamEquivalent)));
  }, [sqFeet]);

  useEffect(() => {
    if (sqFeet === 0) return;

    const bighaEquivalent = Math.floor(sqFeet / 72900);
    const katthaEquivalent = Math.floor((sqFeet % 72900) / 3645);
    const dhurEquivalent = ((sqFeet % 72900) % 3645) / 182.25;

    setBigha(parseFloat(formatNumber(bighaEquivalent)));
    setKattha(parseFloat(formatNumber(katthaEquivalent)));
    setDhur(parseFloat(formatNumber(dhurEquivalent)));
  }, [sqFeet]);

  const clearAllInputs = () => {
    setRohani(0);
    setAana(0);
    setPaisa(0);
    setDaam(0);
    setBigha(0);
    setKattha(0);
    setDhur(0);
    setSqFeet(0);
    setSqMeter(0);
  };

  return (
    <div className='unit_grid'>
      <div className='unit_input'>
        <h2>Land Unit Converter</h2>
          <div className='unit_input_box'>
            <div>
              <label>Rohani</label><br />
              <input type="number" value={rohani} onChange={(e) => setRohani(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>Aana</label><br />
              <input type="number" value={aana} onChange={(e) => setAana(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>Paisa</label><br />
              <input type="number" value={paisa} onChange={(e) => setPaisa(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>Daam</label><br />
              <input type="number" value={daam} onChange={(e) => setDaam(parseFloat(e.target.value) || 0)} />
            </div>
          </div>
        
          <div className='unit_input_box'>
            <div>
              <label>Bigha</label><br />
              <input type="number" value={bigha} onChange={(e) => setBigha(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>Kattha</label><br />
              <input type="number" value={kattha} onChange={(e) => setKattha(parseFloat(e.target.value) || 0)} />
            </div>
            <div>
              <label>Dhur</label><br />
              <input type="number" value={dhur} onChange={(e) => setDhur(parseFloat(e.target.value) || 0)} />
            </div>
          </div>
        <div  className='unit_input_box'>
          <div>
            <label>Sq. Feet</label><br />
            <input type="number" value={sqFeet} readOnly />
          </div>
          <div>
            <label>Sq. Meter</label><br />
            <input type="number" value={sqMeter} readOnly />
          </div>
        </div>
        <button onClick={clearAllInputs}>Clear All</button>
      </div>
      <div className='unit_info'>
        <div className="unit_info_box">
          <h5>1 Ropani </h5>
          <p>equals to 74 feet x 74 feet</p>
        </div>
        <div className="unit_info_box">
          <h5>1 Bigha</h5>
          <p>equals to 13 Ropani</p>
        </div>
        <div className="unit_info_box">
          <h5>1 Kattha</h5>
          <p>  equals to 442 sq. yards or 338 sq. meters</p>
        </div>
      </div>
    </div>
  );
};

export default UnitConverterItem;
