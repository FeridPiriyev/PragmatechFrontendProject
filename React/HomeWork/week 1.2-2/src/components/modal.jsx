const Modal=({children,onClose})=>{
    return <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl min-w-[400px] min-h-[300px]">
        <div className="realtive">
            <div className="top-1 right-2 absolute cursor-pointer" onClick={()=>onClose(false)}>X</div>
            <div className="p-8">
                {children}
            </div>
        </div>
    </div>
}

export default Modal;