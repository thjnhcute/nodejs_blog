const express = require('express');
const app = express();
const port = 3000;

// HTTP logger


// app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'resources/views'));

app.get('/tintuc', (req, res) => {
  return res.send('hello world')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})