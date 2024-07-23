import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import './EmiItem.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiItem = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [termYear, setTermYear] = useState(10);
  const [emi, setEMI] = useState('1,321.51');
  const [totalInterest, setTotalInterest] = useState('58,581.2');
  const [totalPayment, setTotalPayment] = useState('1,58,581.2');

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 12 / 100;
    const payments = parseFloat(termYear) * 12;

    const x = Math.pow(1 + interest, payments);
    const monthlyEMI = (principal * x * interest) / (x - 1);

    const totalAmountPayable = monthlyEMI * payments;
    const totalInterestPayable = totalAmountPayable - principal;

    setEMI(monthlyEMI.toFixed(2));
    setTotalInterest(totalInterestPayable.toFixed(2));
    setTotalPayment(totalAmountPayable.toFixed(2));
  };

  const data = {
    labels: ['Principal Loan Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <div className='emi_grid'>
        <div className='emi_calculator'>
          <h2>Calculation of EMI for Home Loan</h2>
          <div className='input_emi'>
            <div>
              <label>Your Loan Amount</label><br />
              <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            </div>
            <div>
              <label>Interest Rate (%)</label><br />
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div>
              <label>Term Year (Years)</label><br />
              <input type="number" value={termYear} onChange={(e) => setTermYear(e.target.value)} />
            </div>
          </div>
          <button onClick={calculateEMI}>Calculate</button>
          <div className='emi_result'>
            <p>Loan EMI:<div>NRS. {emi} </div>Per Month</p>
            <p>Total Interest:<div>NRS. {totalInterest}</div> </p>
            <p>Total Payment: <div>NRS. {totalPayment}</div></p>
          </div>
        </div>
        <div className="doughnut">
          <Doughnut data={data} />
        </div>
      </div>
      
    </div>
  );
};

export default EmiItem;
