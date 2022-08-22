import  React, {useState}  from 'react'
 import "./style.css"
export default function App() {
  const [counter, setCounter] = useState(0);
 

  const increase = () => {
    setCounter(count => count + 1);
  };

const decrease = () => {
  if (counter > 0) {
    setCounter(count => count - 1);
  }
};
 
  const reset = () => {
    setCounter(0)
  }
  return (
    <div class="counter">
      <h1>Parler was hwre</h1>
      <span class="counter__output">{counter}</span>
      <div class="btn__container">
        <button class="control__btn" onClick={increase}>+</button>
        <button class="control__btn" onClick={decrease}>-</button>
        <button class="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};