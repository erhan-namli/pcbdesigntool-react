const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

const cors = require('cors');

const { OAuth2Client } = require('google-auth-library');


dotenv.config()
const client = new OAuth2Client("244496027610-c34d9scktqtfh114hgbh2hsis13dlg52.apps.googleusercontent.com");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(cors({
    origin : 'http:localhost:1337',
}));

app.get("/test" , cors(), (req, res) => {
    res.json({
        message : "basarili"
    })
})

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
);

const users = []
function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item
  else array.push(item)
}

app.post('/api/google-auth', async (req, res) => {

    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "244496027610-c34d9scktqtfh114hgbh2hsis13dlg52.apps.googleusercontent.com"
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