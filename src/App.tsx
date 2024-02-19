import { useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import { UserInput } from './components/userinput/UserInput'
import { Results } from './components/results/Results';

function App() {

  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 12000,
      expectedReturn: 9,
      duration: 5
  });

  const isValidInput = userInput.duration >=1;

  const handleChange = (inputId: string, newVal: string) => {
    setUserInput(val=> {return {...val, [inputId]: newVal}} );
  };

  return (
    <>
     <Header/>
     <UserInput userInput={userInput} handleChange={handleChange}/>
     {!isValidInput && <p style={{color: 'red'}}> Please input Valid Data</p>}
     {isValidInput && <Results userInput={userInput}/>}
    </>
  )
}

export default App
