const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 5000;

const data = require('./data.js');

let screams = data.screams;
let users = data.users;

app.get('/api/screams', (req, res) => {
  res.send(screams);
});
app.post('/api/screams', (req, res) => {  
  screams = [
    {
      id: screams.length,
      text: req.body.post
    },
    ...screams
  ];
  res.end();
});
app.delete('/api/screams/:id', (req, res) => {
  screams = screams.filter(scream => scream.id !== parseInt(req.params.id));
  res.status(204);
  res.end();
});

app.get('/api/users', (req, res) => {
  res.send(users);
});
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  res.send(user);
});
app.post('/api/users', (req, res) => {
  users = [
    {
      id: users && users.length > 0 ? users.length : 0,
      email: req.body.email,
      password: req.body.password
    },
    ...users
  ];
  res.end();
});
app.put('/api/users/:id', (req, res) => {  
  const id = parseInt(req.params.id);

  users = users.map(user => {
    if (user.id === id) {
      return req.body;
    }
    return user;
  });
  res.end();
});
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.status(204);
  res.end();
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));