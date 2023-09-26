const createSong = require('./song');

const totalContainers = 99;
const container = 'bottle';
const beverage = 'beer';

const song = createSong(totalContainers, container, beverage);
for (const line of song) {
  console.log(line);
}
