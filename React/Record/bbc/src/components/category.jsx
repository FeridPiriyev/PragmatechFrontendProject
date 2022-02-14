import CategoryNews from "./categoryNews";


const Category = ({ categoryTitle }) => {

    const news = [
        {
            image: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/80A4/production/_122923923_gettyimages-1365913612.jpg",
            title: "EFL Cup semi-final: Arsenal 0-1 Liverpool - Jota opens scoring",
            subtitle: "Follow live text and BBC Radio 5 Live commentary as Arsenal host Liverpool in the second leg of their Carabao Cup semi-final.",
            category: "Football",
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/80A4/production/_122923923_gettyimages-1365913612.jpg",
            title: "EFL Cup semi-final: Arsenal 0-1 Liverpool - Jota opens scoring",
            subtitle: "Follow live text and BBC Radio 5 Live commentary as Arsenal host Liverpool in the second leg of their Carabao Cup semi-final.",
            category: "Football",
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/80A4/production/_122923923_gettyimages-1365913612.jpg",
            title: "EFL Cup semi-final: Arsenal 0-1 Liverpool - Jota opens scoring",
            subtitle: "Follow live text and BBC Radio 5 Live commentary as Arsenal host Liverpool in the second leg of their Carabao Cup semi-final.",
            category: "Football",
        },
    ]


    return <div className="flex flex-col">
        <div className="font-bold">{categoryTitle}</div>
        <div className="grid grid-cols-3 gap-5">
            {news.map((element,i)=> <CategoryNews {...element} />)}
        </div>


    </div>
}

export default Category;