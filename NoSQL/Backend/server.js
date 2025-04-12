const express = require('express');
const cors = require('cors');
const ConectarMongoDb = require('./bd.js');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500', 'http://127.0.0.1:3000', 'http://localhost:3000'],
  preflightContinue: true
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/login', async (req, res) => {
  console.log(req.body);

  const conn_db = new ConectarMongoDb('test', 'users');
  await conn_db.connect();

  let data = await conn_db.findOne({ email: req.body.user, password: req.body.password });

  console.log(data);

  res.setHeader('Content-Type', 'application/json');
  return res.json({ message: 'la informacion es', mdb_data: data });
});

