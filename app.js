import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import hbs from 'hbs';

dotenv.config();
const __dirname = path.resolve();
const app = express();
const port = process.env.APP_PORT;
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Jackson Rodriguez',
    title: 'Practicing with Express.js',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Jackson Rodriguez',
    title: 'Practicing with Express.js',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Jackson Rodriguez',
    title: 'Practicing with Express.js',
  });
});

app.get('*', (req, res) => {
  res.send('404 | Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
