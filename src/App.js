//import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




function App() {
  const[mode,setmode] =useState('light')
  const[alert,setalert]=useState(null);
  const showalert=(message,type)=>{
   setalert ({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setalert(null);
   }, 1500);

  }
  const toglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showalert('Dark mode has been enabled','success');
      document.title='TextUtils-DarkMode';
      setInterval(() => {
        document.title='TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title='Instal textUtils Now';
      }, 1500);
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert('Light mode has been enabled','success');
      document.title='TextUtils-LightMode';
    }
  }
  return (
<>
{/* <Router> */}
<Navbar title="TextUtils"  mode={mode} toglemode={toglemode}/>
{/* by default protoype set when no title here */}
{/* <About/> */}

<Alert alert={alert}/>
<div className="container my-3 ">
{/* <Routes>
<Route path="/about" element={<About/>} />
<Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>} />

</Routes> */}
<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>
</div>
{/* </Router> */}
</>
  );
}

export default App;
