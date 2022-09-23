// How to Handle API in javascript



fetch("https://api.chucknorris.io/jokes/categories")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("DATA is :", data);
    var joke = data.value;
    console.log("JOKE:", joke);
  })
  .catch();