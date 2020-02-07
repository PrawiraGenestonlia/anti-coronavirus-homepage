const express = require('express');
const path = require('path');
const app = express();

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, './public')));
app.use("/app-landing/anti-coronavirus/", express.static(path.join(__dirname, './public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public', '/index.html'));
});

app.listen(
  process.env.PORT || 4002,
  function () {
    console.log(`Serving at http://localhost:4002`);
  }
);