import { Table } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Steptwo() {
    const [isChossen, setisChossen] = useState(false);
    const navigate = useNavigate()
    

    return <div>
        <div className="title" style={{ color: 'white', paddingLeft: 100 }}>
            <h7>STEP 2 OF 3</h7>
            <h1 style={{ fontSize: 23 }}>Choose a plan that's right for you..</h1>
            <p style={{ fontSize: 17 }}>Downgrade or upgrade at any time</p>
        </div>


        <Table striped bordered hover variant="dark">
            <thead style={{ textAlign: 'center' }}>
                <tr >
                    <div className="buttons" style={{ display: "flex", float: "right", }}>
                        <div className="button" style={{ width: 120, height: 120, margin: 15, background: "rgb(229, 9, 20)", fontSize: 17, borderRadius: 7, }}>Basic</div>
                        <div className="button" style={{ width: 120, height: 120, margin: 15, background: "rgb(229, 9, 20)", fontSize: 17, borderRadius: 7, }}>Standart</div>
                        <div className="button" style={{ width: 120, height: 120, margin: 15, background: "rgb(229, 9, 20)", fontSize: 17, borderRadius: 7, }}>Premium</div>
                    </div>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Monthly price after free month ends</td>
                    <td>$7.99</td>
                    <td>$10.99</td>
                    <td>$13.99</td>
                </tr>
                <tr>
                    <td>HD available</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Ultra HD available</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Screens you can watch on at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Watch on your laptop, TV, phone and tablet</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Unlimited movies and TV shoes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>First month free</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Cancel anytime</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </Table>
        <div className="button" style={{ paddingLeft: 500 }}>
            <button style = {{ padding: "10px 100px", color: "#fff", }} className = "bg-[#e50914]"  onClick={() => {
                navigate({
                    pathname: "/stepthree"
                })
            }}>CONTINUE</button>
        </div>
    </div >
}

