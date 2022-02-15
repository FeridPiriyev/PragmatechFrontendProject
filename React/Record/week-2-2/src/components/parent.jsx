import { useRef, useState } from "react";
import Child from "./child"

const Parent = () => {

    // const inputRef = useRef(null)

    const [data, setData] = useState([
        { name: "Ferid" },
        { name: "Piriyev" },
        { name: "kenan" }
    ])


    return (
        <div className="flex flex-col items-center ">
            {/* {data.map((item,index)=> <Child key={index}/>)} */}


            {data.map((item, index) => {

                return <div className="w-[150px]">
                    <input type="text" key={index} className="border-2 border-black" />
                    <button onClick={() => {
                        const customData = [...data]
                        customData.splice(index, 1)
                        setData(customData)
                    }}>
                        Remove
                    </button>
                </div>
            })}

            {/* <h1>Parent</h1>
            <Child ref={inputRef}/>

            <button onClick={()=> console.log(inputRef.current.value)}>
                Click
            </button> */}
        </div>
    )
}

export default Parent;