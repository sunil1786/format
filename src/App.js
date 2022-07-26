import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState, useEffect } from "react";

const data = [{ name: "Aman" }, { name: "Sunil" }]

const App = () => {



  return (
    <>
      <Navbar title="TextUtils" about="AboutUtils" />
      <TextForm />
      
    </>
  );
}

export default App;
