import React, { useState } from "react";

const HooksInReact = () => {
  const [isBool, setIsBool] = useState(false);

 const handleLogin = () => {
    setIsBool(false);
  };
 const handleLogout = () => {
    setIsBool(true);
  };

  return (
    <div className="d-flex justify-content-center ">
      {isBool ? (
        <div>
          <p>Click on Login to See Logout button</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <p>Click on Logout to See Login button</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default HooksInReact;
