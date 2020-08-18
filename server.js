const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'ka9',
    password : '123',
    database : 'smart-brain'
  }
});

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {res.send('it is working.')});
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfileGet(db));
app.put('/image', image.handleImage(db));
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });

app.listen(process.env.PORT || 3000, () =>{
  console.log(`app is running on port ${process.env.PORT}`);
});

/*
/root route --> res = this is working
/signin --> POST success/faill
/register --> POST = user
/profile/:userId --> GET = user 
/image --> PUT(becasue there's an update) --> user
*/