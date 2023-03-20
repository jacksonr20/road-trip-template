import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
const __dirname = path.resolve();
const app = express();
const port = process.env.APP_PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/generic', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/generic.html'));
});

app.get('/elements', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/elements.html'));
});

app.get('*', (req, res) => {
  res.send('404 | Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
