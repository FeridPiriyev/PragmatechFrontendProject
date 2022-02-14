import brand from "./img/netflix.png"


export default function Footer() {
    return <>
        <div className="flex">
        <img src={brand} alt="" className="h-[20px] pl-[150px] w-[230px] m-[30px]  " />
        <p className="text-[#868e96] text-[14px] pl-[280px] m-[30px] ">©2019. All Rights Reserved</p>
        <h3 className="text-[#868e96] text-[17px] pl-[290px] m-[35px] ">Github</h3>

        </div>

    </>
}