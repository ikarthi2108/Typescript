function getProduct() {
    return fetch('/api1.json')
        .then(function (res) { return res.json(); })
        .then(function (res) { return res; });
}
getProduct()
    .then(function (pro) {
    console.log(pro.map(function (u) { return 'ProductId:' + u.ProductId + '\n' + 'ProductName:' + u.ProductName + '\n' + 'ProductPrice' + u.Price + '\n' + 'Quantity' + u.Quantity + '\n' + '\n'; }).toString());
});
