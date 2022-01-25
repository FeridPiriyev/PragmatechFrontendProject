import logo from "./logo.svg";
import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/header";
import Category from "./components/category";
import Modal from "./components/modal"

function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [text, setText] = useState()

  const click =()=>{

  }

  return (
    // <div className="flex flex-col justify-center items-center space-y-3 py-4">
    //   <input type="text" placeholder='Type something' className='border' onChange={(e)=>{
    //     setUsername(e.target.value)
    //   }} />
    //   <input type="password" placeholder='Type something' className='border' onChange={(e)=>{
    //     setPassword(e.target.value)
    //   }} />

    //   <button>Click me</button>
    //   <h1>{text}</h1>
    // </div>
    <>
      <div class="w-[75%] mx-auto py-10 flex flex-col space-y-20">
        <Header />
        <Category categoryTitle="News" />
      </div>


    </>

  );
}

export default App
