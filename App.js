import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Admin from "./components/Admin";


function App() {
  return <div className = "app">
    {/* <Route path = '/' component = {LoginForm}/> */}
    <RegisterForm></RegisterForm>
  </div>
}

export default App;