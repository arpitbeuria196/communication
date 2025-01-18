import { useState } from 'react';
import Body from './components/Body';

function App() {

  const[principal,setPrincipal] = useState(0);
  const[interestRate,setInterestRate] = useState(0);
  const [processingFee,setProcessingFee] = useState(0);
  const[downPayment,setDownPayment] = useState(0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const[month,setmonth] = useState(12);
  const handleDownPayment = (percentage)=>
  {
    const calculatedpayment = (percentage*principal)/100;
    setDownPayment(calculatedpayment);
    handleLoanAmount(calculatedpayment);

  }

  const handleLoanAmount = (calculatedpayment)=>
  {
    const loanPrincipal = principal - calculatedpayment;
    const monthlyInterestRate = interestRate / 12 / 100; 
    const emi =
      (loanPrincipal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, month)) /
      (Math.pow(1 + monthlyInterestRate, month) - 1);

      setLoanAmount(emi.toFixed(2));
  }
  const handleTotalDownPayment = ()=>
  {
      const restAmt = ((principal-downPayment));
      const val = (restAmt * processingFee)/100;
      const totalDownPayment = downPayment + val;
      return totalDownPayment.toFixed(2);
      
  }

  return (
    <div className="App">
     <div className='m-20'>
     <h1 className='text-3xl font-semibold'>EMI Calculator</h1>
      <div className='grid'>
      <label className='font-bold pt-5'>Total Cost of Asset</label>
      <input
      className='border bg-gray-100 mt-3'
      value={principal}
      type='number'
      onChange={(e)=>setPrincipal(e.target.value)}
      />
      <label className='font-bold pt-5'>Interest Rate(in %)</label>
      <input
      className='border bg-gray-100 mt-3'
      type='number'
      value={interestRate}
      onChange={(e)=>setInterestRate(e.target.value)}
      />
      <label className='font-bold pt-5'>processing Fee (in %)</label>
      <input
      type='number'
      className='border bg-gray-100 mt-3'
      value={processingFee}
      onChange={(e)=>setProcessingFee(e.target.value)}
      />
      <label className='font-bold pt-5'>Down payment</label>
      <label>Total Down Payment-${downPayment}</label>
      <input
      type='range'
      min={0}
      max={100}
      step={1}
      onChange={(e)=>{
        const percentage = Number(e.target.value);
        setDownPaymentPercentage(percentage);
        handleDownPayment(percentage);

      }}
      />
       <label className="font-bold pt-5">Total Down Payment (Including Processing Fee)</label>
       <label>₹{handleTotalDownPayment()}</label>
       <label className="font-bold pt-5">Loan Amount per Month</label>
       <label>${loanAmount}</label>
       <input
       type='range'
       min={0}
       max={principal}
       value={loanAmount}

       />
      </div>
        <div className='flex mt-3'>
        <button
            className="border rounded-lg px-4 py-2 mr-2 bg-gray-100"
            onClick={() => {
              setmonth(12);
              handleLoanAmount(downPayment);
            }}
            >12 Months</button>
            <button
            className="border rounded-lg px-4 py-2 mr-2 bg-gray-100"
            onClick={() => {
              setmonth(24);
              handleLoanAmount(downPayment);
            }}
            >24 Months</button>
            <button
            className="border rounded-lg px-4 py-2 mr-2 bg-gray-100"
            onClick={() => {
              setmonth(36);
              handleLoanAmount(downPayment);
            }}
            >36 Months</button>
        </div>
     </div>
    </div>
  );
}

export default App;
