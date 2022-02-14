
import Register from "./Register"
import brand from "./img/netflix.png"

export default function Navbar() {
    return <>
        <div className="flex" >
            <a href="/"><img src={brand}  alt="" className="h-[40px] pl-[140px] w-[240px] m-[30px]  " /></a>
            <Register />
        </div>

    </>
}