
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"


export default function Register() {
    const navigate = useNavigate()
    return <>
        <button className="text-[#b81d24] pl-[700px] text-lg ... m-[20px]" onClick={() => {
            navigate({
                pathname: "/stepone"
            })
        }}>Register</button>
    </>
}


