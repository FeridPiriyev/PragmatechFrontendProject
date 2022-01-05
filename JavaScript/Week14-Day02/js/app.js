let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        let categories = document.querySelector('.categories')
        let news = document.querySelector('.news')
        let i = 0;
        let j = 0;
        let loadTime = 1000


        let cat = setInterval(function() {
            if (i < data.length) {
                categories.innerHTML += `<div class="category">${data[i].name}</div>`
                i++
            } else {

                clearInterval(cat)
            }
        }, loadTime)

        setTimeout(function() {
            let allNews = []
            for (let category of data) {
                allNews = allNews.concat(category.news)
            }

            let newsInterval = setInterval(function() {
                if (j < allNews.length) {
                    news.innerHTML += `<div class="news-item">${allNews[j]}</div>`
                    j++
                } else {
                    clearInterval(newsInterval)
                }
            }, loadTime)
        }, (loadTime * data.length + 1))





    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();

function loadPage(loadCats, loadNews) {

}
