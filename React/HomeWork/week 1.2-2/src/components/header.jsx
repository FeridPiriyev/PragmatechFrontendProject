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
            image: "https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/158CE/production/_123007288_gettyimages-1235194772.jpg",
            title: "US could sanction Putin personally if Russia invades",
            subtitle: "",
            category: "EUROPE"
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/1020C/production/_123006066_meddy.jpg",
            title: "Australian Open: Medvedev v Auger-Aliassime for last semi-final spot - radio & text",
            subtitle: "",
            category: "Tennis"
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/1680/production/_123006750_fj-ppgsxsamqe7u.jpg",
            title: "Dozens feared missing as boat capsizes off Florida",
            subtitle: "",
            category: "US & Canada"
        },
        {
            image: "https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/bk/0r/p0bk0rj0.jpg",
            title: "The relationship that's still taboo",
            subtitle: "",
            category: "CULTURE"
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