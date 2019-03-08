const axios = require('axios');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');
const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const user = req.body;

  const hash = bcryptjs.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      res.status(200).json(savedUser)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
