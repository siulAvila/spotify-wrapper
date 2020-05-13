import express from 'express';

import search from '../src/api/albums';

const app = express();

const getAlbums = async () => {
  try {
    const albums = await search.searchAlbums('Guns N Roses');
    return albums;
  } catch (error) {
    return error;
  }
};

app.get('/', async (req, res) => {
  const response = await getAlbums();
  res.send(response);
});

const server = app.listen(3000, () => {
  console.log(`App running on port: ${server.address().port}`);
});
