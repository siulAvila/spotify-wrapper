import express from 'express';

import searchAlbums from './api/albums';

const app = express();

let albumNames;

const getAlbums = async () => {
  const albums = await searchAlbums('Guns N Roses');
  albumNames = albums.map((album) => album.name);
};

app.get('/', async (req, res) => {
  await getAlbums();
  res.send(albumNames);
});

const server = app.listen(3000, () => {
  console.log(`App running on port: ${server.address().port}`);
});
