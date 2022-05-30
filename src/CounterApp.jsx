import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {
  // const [state, setstate] = useState(initialState);
  // const [nombre , setNombre] = useState('Goku')
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter((c) => c - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      {/* <h2>{value}</h2> */}
      <h2>{counter}</h2>
      <button onClick={handleAdd}>1+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
