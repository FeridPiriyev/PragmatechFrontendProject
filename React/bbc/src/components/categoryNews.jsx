

const categoryNews=({image,title,subtitle,category})=>{
    return <div className="flex flex-col space-y-4">
        <img src={image} alt="" />
        <div className="text-bold">{title}</div>
        <div>{subtitle}</div>
        <div>{category}</div>
    </div>
}

export default categoryNews;