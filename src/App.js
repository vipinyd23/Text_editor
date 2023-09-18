import Alert from "./pages/Alert";
import Navigation from "./pages/Navigation";
import TextBox from "./pages/TextBox";
import TextForm from "./pages/TextForm";
import React,{ useState } from "react";

function App() {
  const [alert,setAlert]=useState("null");
  function showAlert(message, type) {
  setAlert({
    msg: message,
    type: type
  });
  setTimeout(()=>{
    setAlert("null");
  },1500)
  }
  return (
  <>
  <Navigation title="Tutorial" />
  <Alert alert={alert}/>
  <TextBox showAlert={showAlert}/>
  </>
  );
}

export default App;
