import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 50 },
  //   { duration: '10s', target: 100 },
  //   { duration: '10s', target: 250 },
  //   { duration: '10s', target: 500 },
  //   { duration: '10s', target: 750 },
  //   { duration: '10s', target: 1000 },
  ]
}

export default function () {
  const params = {
  product_id: Math.floor(Math.random() * 1000011) + 1,
  }
  const res = http.get(`http://localhost:8080/reviews/meta`, params);
  check(res, {
    'is status 200': (r) => r.status === 200
  })
  // const params2 = {
  //   product_id: Math.floor(Math.random() * 1000011) + 1,
  //   page: 1,
  //   count: 5,
  //   sort: 'helpfulness'
  // // }
  // const res2 = http.get(`http://localhost:8080/reviews`, params2);
  // check(res2, {
  //   'is status 200': (r) => r.status === 200
  // })
  // const payload = JSON.stringify({

  //   "product_id": 66642,
  //   "rating": 5,
  //   "summary": "Kevin's Chili",
  //   "body": "At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know eachother in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.",
  //   "recommend": true,
  //   "reviewer_name": "Kevin",
  //   "reviewer_email": "kevin@dundermifflin.com",
  //   "photos": ["https://preview.redd.it/opsw15mqpbj71.jpg?auto=webp&s=ab61338c0ea7d4e0e4bff8ce04dad350c7e9bad5"],
  //   "characteristics": {
  //     "223572": 3,
  //     "223573": 3,
  //     "223574": 3,
  //     "223575": 3
  //   }
  // })
  // const res3 = http.post(`http://localhost:8080/reviews`, payload);
  // check(res3, {
  //   'is status 200': (r) => r.status === 200
  // })
  // const params4 = {
  //   review_id: Math.floor(Math.random() * 1000011) + 1,
  // }
  // const res4 = http.put(`http://localhost:8080/reviews/${params4.review_id}/helpful`);
  // check(res4, {
  //   'is status 204': (r) => r.status === 204
  // })
  // const params5 = {
  //   review_id: Math.floor(Math.random() * 1000011) + 1,
  // }
  // const res5 = http.get(`http://localhost:8080//:${review_id}/helpful`, params5);
  // check(res5, {
  //   'is status 204': (r) => r.status === 204
  // })
}