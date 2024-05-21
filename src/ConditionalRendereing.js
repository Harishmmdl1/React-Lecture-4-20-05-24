import React from "react";
import Home from "./Home";
import Banglow from "./Bnglow";

// using if-else

const ConditionalRendereing = () => {
  const isBool = true;
//   const isBoolMethod = () => {
//     if (isBool) {
//       return<Home />;
//     } else {
//       return<Banglow />;
//     }
//   };

  return <div>{isBool ? <Home /> : <Banglow /> }</div>;
};

export default ConditionalRendereing;
