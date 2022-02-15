import logo from "./logo.svg";
import './App.css';
import{useEffect, useState} from "react";

function App(){
  const[username,setUsername]=useState()
  const[password,setPassword]=useState()
  const[text,setText]=useState()
  
  useEffect(() =>{
    if(username || password){
      if(username==="Ferid"&& password!=="12345"){
        setText("Yalnızca Username Tapıldı")
      }else if(username!=="Ferid"&& password==="12345"){
        setText("Yalnızca Şifrə Tapıldı")
      }else if(username==="Ferid"&& password==="12345"){
        setText("Hesab Hack Olundu")
      }
      else{
        setText("sehvdir")
      }
    }
  },[username,password])

  return(
    <div className="flex flex-col justify-center items-center space-y-3 py-4">
      <input type="text" placeholder='Type something' className='border' onChange={(e)=>{
        setUsername(e.target.value)
      }} />
      <input type="text" placeholder='Type something' className='border' onChange={(e)=>{
        setPassword(e.target.value)
      }} />
      
      <button className="bg-red">Click Me</button>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
