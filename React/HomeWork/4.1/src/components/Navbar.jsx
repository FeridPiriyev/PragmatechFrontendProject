import Brand from "./Brand"
import Register from "./Register"

export default function Navbar() {
    return <>
        <div className="flex">
            <Brand />
            <Register />
        </div>

    </>
}