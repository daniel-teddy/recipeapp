import React from "react";
import "./tailwind.output.css";
import "./custom.css"
import All from "./pages/All";
import "./custom.css"

// import routes and route
import { Routes, Route } from 'react-router-dom';
import PopUp from "./components/PopUp";

function App() {
  return (

    <div className="App ">
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/recipes/:id' element={<PopUp />} />
       {/*  <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
