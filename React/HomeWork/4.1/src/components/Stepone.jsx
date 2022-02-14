import { FaCheckCircle } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"

export default function Stepone() {
    const navigate = useNavigate()
    return <div className="text-[#fff]" style={{ margin: "74px 0"  }}>
        <div className="icon" style={{ paddingLeft: 660 }}>
            <FaCheckCircle className="text-[#b81d24] text-[40px] " />
        </div>
        <h6 style={{ margin: "20px 0", textAlign: "center" }}>STEP 1 OF 3</h6>
        <h3 style={{ textAlign: "center" }}>Choose Your Plan.</h3>
        <p className="alt" style={{ textAlign: "center" }}>
            Choose from any of our three plans,
            <br></br>and you won't be charged until after
            <br></br>your free month ends.
        </p>
        <div className="button" style={{textAlign:"center"}} >
            <button style = {{ background: "#e50914", margin: "15px auto", color: "#fff", fontSize: 17, padding: "10px 50px", borderRadius: 3 }}  onClick={() => {
                navigate({
                    pathname: "/steptwo"
                })
            }}>SEE THE PLANS</button>
        </div>
    </div>
}

