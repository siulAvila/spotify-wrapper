require('dotenv/config');

export default {
  spotifyAuthorization: `Bearer ${process.env.SPOTIFY_API_KEY}`,
};
