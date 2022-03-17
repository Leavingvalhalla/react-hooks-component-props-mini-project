import React from 'react';

function Article({ title, date = 'January 1, 1970', preview, minutes }) {
  function parseMinutes(minutes) {
    let string = '';
    if (minutes >= 30) {
      let bentos = Math.floor(minutes / 10);
      for (let i = 0; i < bentos; i++) {
        string += '🍱';
      }
    } else {
      let cups = Math.ceil(minutes / 5);
      for (let i = 0; i < cups; i++) {
        string += '☕️';
      }
    }
    return string;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{parseMinutes(minutes) + '   ' + minutes + ' min read'}</p>
    </article>
  );
}

export default Article;
