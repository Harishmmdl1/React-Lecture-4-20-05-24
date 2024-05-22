import logo from "./logo.svg";
import "./App.css";
import PropTypesReact from "./PropTypesReact";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalRendering from "./ConditionalRendereing";
import StatesInReact from "./StatesInReact";
import HooksInReact from "./HooksInReact";
import Assignment from "./Assignment";

function App() {


  const handleCounter = (value) =>{
    console.log(value);
  }

  return (
    <div>
      {/* <h1 className="text-center"> This is App File</h1> */}

      {/* <PropTypesReact
        name={"Harish Mamidala"}
        age={24}
        add={"Mumbai"}
        mob={8149829116}
      />

      <h1 className="text-center"> Are you in Home File </h1>

      <ConditionalRendering />

      {/* <StatesInReact /> */}

      {/* <HooksInReact /> */}

      <Assignment handleCounter={handleCounter}/>


    </div>
  );
}

export default App;
