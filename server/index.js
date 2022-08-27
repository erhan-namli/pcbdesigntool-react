const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');

const cors = require('cors');

const { OAuth2Client } = require('google-auth-library');


dotenv.config()
const client = new OAuth2Client(process.env.REACT_APP_CLIENT_ID);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(cors({
    origin : 'http:localhost:3000/login',
}));

app.get("/test" , cors(), (req, res) => {
    res.json({
        message : "basarili"
    })
})

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
);



app.post('/api/google-auth', async (req, res) => {

    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_CLIENT_ID
    });
  
    const { name, email, picture } = ticket.getPayload();
    upsert(users, {name, email, picture});
    res.status(201);
    res.json({name, email, picture});

  });

app.listen(process.env.PORT || 1337, () => {
    console.log(
      `Server is ready at http://localhost:${process.env.PORT || 1337}`
    )
  })