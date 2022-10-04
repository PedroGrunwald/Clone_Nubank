import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Inicio from "./pages/Inicio";

const App = () => {
  const [isInicio, setIsInicio] = useState(true);
  

  return <>{isInicio ? <Inicio setIsInicio = {setIsInicio}/> : <Dashboard setIsInicio={setIsInicio}/>}</>;

  

};

export default App;
