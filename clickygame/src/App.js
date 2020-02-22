import React, { useState } from 'react';

function App() {
  const [cards, setCards] = useState(buildCards());
  const renderCard = card => {
    const { frontImg, backImg, flipped } = card;
    const img = flipped ? frontImg : backImg;
    return (
      <div className="Card">
        <img src={img} alt="" />
      </div>
    );
  };

  function buildCards() {
    let id = 0;
    const images = {
      angular: 'url to img',
      css: 'url to img',
      html: 'url to img',
      go: 'url to img',
      rail: 'url to img',
      react: 'url to img',
      scala: 'url to img',
      vue: 'url to img'
    };

    const cards = Object.keys(images).reduce((result, key) => {
      const createCard = () => ({
        id: id++,
        type: key,
        backImg: 'url to backImg',
        frontImg: images[key],
        flipped: false
      });
      result.push(createCard());
      result.push(createCard());
      return result;
    }, []);
    return cards;
  }
  return cards, setCards;
}
export default App;
