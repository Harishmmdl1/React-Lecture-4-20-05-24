import React, { useState } from "react";

const Assignment = () => {
  const [count, setCount] = useState(50);

  const hadleIncrement = () => {
    setCount((prev) => prev+1) ;
    // setCount((prev) => prev+1) ;
};
const hadleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log(useState(20));

  return (
    <div className="container text-center mt-5">
      <button onClick={hadleDecrement}>-</button>
      {count}
      <button onClick={hadleIncrement}>+</button>
    </div>
  );
};

export default Assignment;
