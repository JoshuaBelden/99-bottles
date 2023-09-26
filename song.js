const numToText = require('number-to-words');

module.exports = createSong = (totalContainers, container, beverage) => {
  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const pluralize = (string, count) => `${string}${count === 1 ? '' : 's'}`;

  const renderLine = (count) =>
    `{count-upper} {container} of {beverage} on the wall, {count} {container} of {beverage}. Take one down pass it around, {count-1} {container-1} of {beverage} on the wall.`
      .replaceAll('{count-upper}', capitalize(numToText.toWords(count)))
      .replaceAll('{count}', numToText.toWords(count))
      .replaceAll('{count-1}', numToText.toWords(count - 1))
      .replaceAll('{container}', pluralize(container, count))
      .replaceAll('{container-1}', pluralize(container, count - 1))
      .replaceAll('{beverage}', beverage);

  const renderLastLine = () =>
    `No more {container} of {beverage} on the wall, no more {container} of {beverage}. Go to the store and buy some more, {max} {container} of {beverage} on the wall.`
      .replaceAll('{max}', numToText.toWords(totalContainers))
      .replaceAll('{container}', pluralize(container, totalContainers))
      .replaceAll('{beverage}', beverage);

  const iterator = [...Array(totalContainers + 1).keys()].reverse();
  return iterator.map((count) =>
    count != 0 ? renderLine(count) : renderLastLine()
  );
};
