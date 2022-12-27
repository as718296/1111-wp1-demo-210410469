import React from 'react';
import { booklist_data } from '../booklist_data';
import Book_69 from '../components/W02_booklist/Book_69';

const BooklistPage_69 = () => {
  return (
    <section className='booklist'>
      {booklist_data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_69 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default BooklistPage_69;
