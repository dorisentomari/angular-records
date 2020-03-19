const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');

const history = require('connect-history-api-fallback');

const app = express();
const PORT = 3000;

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(history({
  rewrites: [
    { from: /^\/abc$/, to: '/' }
  ]
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist/angular-records/browser')));
app.get('/', function (req, res) {
  res.sendFile('../dist/angular-records/browser/index.html');
});

const user = {
  name: 'jack',
  age: 18
};

app.get('/api/user', (req, res) => {
  res.json(user);
});

app.post('/api/user', (req, res) => {
  let body = req.body;
  let name = body.name;
  let age = body.age;
  if (name) {
    user['name'] = name;
  }
  if (age) {
    user['age'] = age;
  }
  res.json(user);
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running at http://localhost:${PORT}`);
  }
});
