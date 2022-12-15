import React from 'react';
import { data } from './data';
import Book_69 from './Book_69';

const Booklist_69 = () => {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_69 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist_69;
