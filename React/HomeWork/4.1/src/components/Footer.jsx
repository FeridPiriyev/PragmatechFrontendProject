import Footerbrand from "./Footerbrand";
import Footerreserved from "./Footerreserved";
import Github from "./Github";

export default function Navbar() {
    return <>
        <div className="flex">
            <Footerbrand/>
            <Footerreserved/>
            <Github/>
        </div>

    </>
}