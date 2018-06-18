import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
      <div>
    <div className='pa2'>
      <input
        className='tc grow bg-white br1 ma1 dib bw1 shadow-2'
        type='search'
        placeholder='search name'
        onChange={searchChange}
      />
    </div>
      <p></p>
      </div>
      
  );
}

export default SearchBox;