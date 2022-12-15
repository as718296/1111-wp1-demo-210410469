import React, { useState } from 'react'; //State 代表資料

const T12_69_UseStateBasics = () => {
  //let title = 'random title';
  const [title, setTitle] = useState('random title');
  const handleClick = () => {
    setTitle('Hello World');
    console.log('title1', title);
  };

  console.log('title2', title);

  return (
    <>
      <h2>{title}</h2> {/*useState改變，title改變*/}
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default T12_69_UseStateBasics;
