import express from 'express';

const app = express();

app.use(express.json());

app.post('/', (request, response) => {
  return response.json({ hello: 'World.' });
});

app.listen(3000, () => console.log('Server is running on port 3000.'));
