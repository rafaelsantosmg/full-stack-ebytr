require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3333;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
