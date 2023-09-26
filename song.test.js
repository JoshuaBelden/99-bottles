const createSong = require('./song');

describe('99 Bottles of Beer', () => {
  test('no more alcohol', () => {
    const totalContainers = 0;
    const container = 'bottle';
    const beverage = 'beer';

    const song = createSong(totalContainers, container, beverage);

    expect(song.length).toBe(1);
    expect(song[0]).toBe(
      'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, zero bottles of beer on the wall.'
    );
  });

  test('Just 1 bottle', () => {
    const totalContainers = 1;
    const container = 'bottle';
    const beverage = 'beer';

    const song = createSong(totalContainers, container, beverage);
    expect(song.length).toBe(2);
    expect(song[0]).toBe(
      'One bottle of beer on the wall, one bottle of beer. Take one down pass it around, zero bottles of beer on the wall.'
    );
  });

  test('A few bottles', () => {
    const totalContainers = 3;
    const container = 'bottle';
    const beverage = 'beer';

    const song = createSong(totalContainers, container, beverage);

    expect(song.length).toBe(4);
    expect(song[0]).toBe(
      'Three bottles of beer on the wall, three bottles of beer. Take one down pass it around, two bottles of beer on the wall.'
    );
  });
});
