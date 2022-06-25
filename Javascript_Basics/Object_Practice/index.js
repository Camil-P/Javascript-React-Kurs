const url = "https://fakestoreapi.com/products";

var articles = [];

function loadArticles() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      articles = JSON.parse(this.responseText);
    }
    xhttp.open("GET", url);
    xhttp.send();
  }

loadArticles();

const displayArticles = () => {
    console.log(articles[1]);

    const newArray = articles.map(article => {

        console.log(article.rating.count);

        return `<div class="card">
                    <img src="${article.image}" alt="SlikaNeka">
                    <div>
                        <h4 class="category">${article.category}</h4>
                        <p class="description">${article["description"]}</p>
                        <span class="price">${article["price"]}</span>
                    </div>
                </div>`;
    });

    console.log(newArray);

    newArray.forEach(a => document.getElementById("mainDisplay").innerHTML += a);
}