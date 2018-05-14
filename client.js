const express = require('express');
const port = process.env.PORT || 4200;

const app = express();

app.use(express.static('./'));

app.get('*', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Running a GraphQL client on port ${port}.`);
});