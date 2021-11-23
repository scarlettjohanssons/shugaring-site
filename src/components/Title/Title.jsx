import React from 'react';

const Title = ({ titleName }) => {
  return (
    <div class="title-container">
      <h2 className='title-container__name'>{titleName}</h2>
    </div>
  );
};

export default Title;
