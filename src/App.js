import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

const App = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(5);
  const [emi, setEmi] = useState(0);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(Number(event.target.value));
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(Number(event.target.value));
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(Number(event.target.value));
  };

  const calculateEmi = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const emiAmount =
      loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTerm) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
    setEmi(emiAmount.toFixed(2));
  };

  return (
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div className="input-container">
        <label>
          Loan Amount:
          <input type="number" min="10000" max="1000000" step="10000" value={loanAmount} onChange={handleLoanAmountChange} />
        </label>
      </div>
      <div className="input-container">
        <label>
          Loan Term (in months):
          <input type="range" min="6" max="60" step="6" value={loanTerm} onChange={handleLoanTermChange} />
          {loanTerm}
        </label>
      </div>
      <div className="input-container">
        <label>
          Interest Rate (per annum):
          <input type="range" min="5" max="20" step="0.5" value={interestRate} onChange={handleInterestRateChange} />
          {interestRate}%
        </label>
      </div>
      <div>
        <button onClick={calculateEmi}>Calculate EMI</button>
      </div>
      {emi > 0 && <div>EMI: {emi}</div>}
    </div>
  );
};

export default App;
