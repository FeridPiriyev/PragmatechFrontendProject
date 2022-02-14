import { useNavigate } from 'react-router-dom';
import React,{useState,useEffect} from "react";

export default function Steptwo() {
    const[information,setinformation]=useState([]);


    const[name,setName]=useState("");
    const[surname,setSurname]=useState("");
    const navigate = useNavigate()

    const handleAddInformationSubmit=(e)=>{
        e.preventDefault();
        let title={
            name,
            surname
        }
        setinformation([...information,title ]);
        setName("");
        setSurname("");
    }



    return <div style={{ padding: "30px 0" }}>
        <div className="title" style={{ color: "white", paddingLeft: 500 }}>
            <h6>STEP 3 OF 3</h6>
            <h3>Sign up to start your free month</h3>
            <p>Create your Account</p>
        </div>
        <form action="" onSubmit={handleAddInformationSubmit} style={{ display: "table-caption", paddingLeft: 500 }}>
            <input type="text" className='form-control' required onChange={(e)=>setName(e.target.value)} value={name} style={{ margin: "5px 0", height: 50, width: 350 }} placeholder="First Name" />
            <input type="text" className='form-control' required onChange={(e)=>setSurname(e.target.value)} value={surname} style={{ margin: "5px 0", height: 50, width: 350 }} placeholder="Last Name" />
            <input type="email" className='form-control' required style={{ margin: "5px 0", height: 50, width: 350 }} placeholder="Email" />
            <input type="password" className='form-control' required style={{ margin: "5px 0", height: 50, width: 350 }} placeholder="Password" />
            <button style = {{ color: "white", backgroundColor: "#e50914", padding: "7px 140px", margin: "20px 0" }}  onClick={() => {
                navigate({
                    pathname: ""
                })
            }}>CONFIRM</button>
        </form>
    </div>
}