import { forwardRef } from "react";

const Child = forwardRef((props,reference) => {
    return <>
        <input ref={reference} type="text" className="border-2 border-black" />
    </>
})

export default Child;