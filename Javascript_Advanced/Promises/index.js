const url = "https://fakestoreapi.com/products";

const load = () =>
  new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url);
    xhttp.send();
    xhttp.onload = function () {
      resolve(JSON.parse(this.responseText));
    };
    xhttp.onerror = () => {
      reject(this);
    };
  });

const loadProducts = async () => {
  const products = await load();

  console.log(products);

  displayArticles(products);
};

var displayArticles = (articles) => {
  console.log(articles[1]);

  const newArray = articles.map((article) => {
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

  newArray.forEach(
    (a) => (document.getElementById("mainDisplay").innerHTML += a)
  );
};
