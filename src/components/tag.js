import {useState} from 'react';

import React from 'react';

export default function Tag(props) {
  const [isFocus, setIsFocus] = useState(false);

  function handleClickRemoveInterest() {
    const {removeInterest, title} = props;
    removeInterest(title);
  }

  return (
    <div
      className="tag"
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
    >
      {props.title}
      {isFocus && (
        <span className="tag__hover__area">
          <button onClick={handleClickRemoveInterest}>x</button>
        </span>
      )}
    </div>
  );
}
