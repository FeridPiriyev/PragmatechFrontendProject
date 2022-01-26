import { useRef, useEffect, useState } from "react";
import Modal from "./modal";

const HeaderNews = ({ title, subtitle, category, image }) => {


    const [isBigger, setBigger] = useState(false)

    const[isModalOpen,setModalOpen]=useState(false)


    const divReferance = useRef(null)


    useEffect(() => {
        if (window.outerWidth / divReferance.current.offsetWidth < 3) {
            setBigger(true)
        }
    }, [])


    return <><div ref={divReferance} className="flex flex-col justify-end text-white" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
    }} onClick={()=>{
        setModalOpen(true)
    }}>
        <div className="text-xl">{title}</div>
        {isBigger && <div className="text-red-500">{subtitle}</div>}
        <div>{category}</div>
    </div>

    {isModalOpen &&    <Modal onClose={setModalOpen}>
    <div className="text-xl">{title}</div>
        {isBigger && <div className="text-red-500">{subtitle}</div>}
        <div>{category}</div>
    </Modal>}
    </>
}

export default HeaderNews;