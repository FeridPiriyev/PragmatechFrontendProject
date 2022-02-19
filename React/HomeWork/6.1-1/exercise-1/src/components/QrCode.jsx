import React, { useState, useEffect, useRef } from 'react';

export default function QrCode() {

    const [inputvalue, setinputvalue] = useState()
    const [color, setcolor] = useState("")
    const inputdata = useRef(null)
    const redinput = useRef(null)
    const greeninput = useRef(null)
    const yellowinput = useRef(null)

    const submitdata = (e) => {
        e.preventDefault()
        setinputvalue(inputdata.current.value)
        if (redinput.current.checked) {
            setcolor("f00")
        } else if (greeninput.current.checked) {
            setcolor("0f0")
        } else if (yellowinput.current.checked) {
            setcolor("")
        }
    }


    return <div>
        <div className="qrcode" style={{paddingLeft:"44%"}} >
            <img src={`http://api.qrserver.com/v1/create-qr-code/?data="${inputvalue}"&size=150x150&bgcolor=${color}`} alt="" />
        </div>

        <h1 style={{ color: "red", textAlign: "center" }}>Qr Code Generator :)</h1>
        <div className="input" style={{ textAlign: "center", padding: "100px 0" }}>
            <form action="">
                <input ref={inputdata} id='inputdata' type="text" placeholder="Melumat yaz..." />
                <div className="radio__wrapper" style={{ display: "flex" ,paddingLeft:"48%",margin:"40px 0"}}>

                    <input ref={redinput} id='red' type="radio" name="color" value="red" />
                    <input ref={greeninput} id="green" type="radio" name="color" value="green" />
                    <input ref={yellowinput} id='yellow' type="radio" name="color" value="yellow" />
                </div>
                <button onClick={submitdata} style={{ padding: "5px 6px", backgroundColor: "blue", color: "white", }}>
                    Generator
                </button>
            </form>
        </div>

    </div>
}