const frisby = require('frisby');

it ('GET /products with count 5 and page 1 parameters should return a status of 200 OK and 5 products', function () {
  return frisby
    .get('http://localhost:8080/reviews?product_id=66644&count=5&page=1', {json: true}, {headers: {'Content-Type': 'application/json'}})
    .expect('status', 200)
    .then(function (res) {
      var data = res._json;
      expect(data.length).toBe(5);
    })
});

it ('GET /reviews/meta of 1 should return a status of 200 OK and the correct product info', function () {
  return frisby
    .get('http://localhost:8080/reviews/meta/product_id=1')
    .expect('status', 200)
    .then(function (res) {
      var data = res._json;
      expect(data.product_id).toBe(1);
      expect(data.ratings.5).toBe(4);
      expect(data.recommended.false).toBe(1);
      expect(data.description.characteristics.fit.value).toBe(3.3333333333333333);
    })
});
