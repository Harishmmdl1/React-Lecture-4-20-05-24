import React, { useState } from "react";

const Assignment = ( {handleCounter}) => {
  const [count, setCount] = useState(50);

  const hadleIncrement = () => {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev+1) ;
    handleCounter(count + 1);
  };
  const hadleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      handleCounter(count - 1);
    }
  };
  const hadleReset = () => {
    setCount(0);
    handleCounter(0);
  };

  return (
    <div className="container text-center mt-5">
      <h2> The Counter App</h2>
      <h3 className="mt-5">{count}</h3>
      <br></br>
      <button className="btn btn-danger m-4" onClick={hadleDecrement}>Decrement</button>
      <button className="btn btn-info m-4" onClick={hadleReset}>Reset</button>
      <button className="btn btn-success m-4" onClick={hadleIncrement}>Increment</button>
    </div>
  );
};

export default Assignment;
