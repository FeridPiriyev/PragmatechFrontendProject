import HeaderNews from "./headerNews"





const Header = () => {

    const bigNews = {
        image: "https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/141E8/production/_122880428_trumpin2020reuters.jpg",
        title: "Its president bristles at suggestions a minor Russian attack may bring a weaker Western response.",
        subtitle: "Trump's alleged fraud detailed in new court papers",
        category: "US"
    }


    const smallNews = [
        {
            image: "https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/141E8/production/_122880428_trumpin2020reuters.jpg",
            title: "Trump's alleged fraud detailed in new court papers",
            subtitle: "",
            category: "US"
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/141E8/production/_122880428_trumpin2020reuters.jpg",
            title: "Trump's alleged fraud detailed in new court papers",
            subtitle: "",
            category: "US"
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/141E8/production/_122880428_trumpin2020reuters.jpg",
            title: "Trump's alleged fraud detailed in new court papers",
            subtitle: "",
            category: "US"
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/141E8/production/_122880428_trumpin2020reuters.jpg",
            title: "Trump's alleged fraud detailed in new court papers",
            subtitle: "",
            category: "US"
        },
    ]

    return (
        <div>
            <div class="flex justify-between">
                <h2 className="font-bold text-xl">Welcome to BBC.com</h2>
                <span>Thursday, 20 January</span>
            </div>
            <div className={`grid grid-cols-2 gap-4 py-4 h-[350px]`}>
                <HeaderNews {...bigNews} />
                <div className={`grid grid-cols-2 gap-4`}>
                    {smallNews.map((element, i) => <HeaderNews{...element} />)}
                </div>
            </div>
        </div>
    )
}

export default Header;