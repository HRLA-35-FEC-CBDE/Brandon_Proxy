var routes = require('express').Router();
var axios = require('axios');

routes.get('/item/:id', (req, res) => {
  console.log(req.body)
  axios
    .get('http://localhost:3002/item')
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
});

module.exports = routes; 