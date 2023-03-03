function getFakeApi() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(function (res) { return res.json(); })
        .then(function (json) { return console.log(json); });
}
getFakeApi();
