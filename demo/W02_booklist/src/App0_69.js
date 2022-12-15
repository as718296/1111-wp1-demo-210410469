import './App_69.css';

/*
const firstBook = {
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg',
  title:
    'The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel',
  author: 'Donna Everhart',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71suo2h--PL._AC_UY327_FMwebp_QL65_.jpg',
  title:
    'The Spanish Daughter: A Gripping Historical Novel Perfect for Book Clubs',
  author: 'Lorena Hughes',
};

const thirdBook = {
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ab+IMNTqL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Flames & Forget-Me-Nots (Book 1) (Hadsan Cove Series)',
  author: 'S.E. Riley',
};

*/

const data = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg',
    title:
      'The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel',
    author: 'Donna Everhart',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71suo2h--PL._AC_UY327_FMwebp_QL65_.jpg',
    title:
      'The Span ish Daughter: A Gripping Historical Novel Perfect for Book Clubs',
    author: 'Lorena Hughes',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ab+IMNTqL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Flames & Forget-Me-Nots (Book 1) (Hadsan Cove Series)',
    author: 'S.E. Riley',
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/I/91nCsvKqE5L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Where the Crawdads Sing Kindle Edition',
    author: 'Delia Owens',
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/I/81-9WE99PhL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'First Family Series',
    author: 'Marie Force',
  },
];

const App_69 = () => {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_69 key={id} img={img} title={title} author={author} />;
      })}
      {/* <Book_69
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book_69
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book_69
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      /> */}
    </section>
  );
};

const Book_69 = (props) => {
  //const Book_69 =({ img, title , author}) => {
  console.log('props', props);
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
export default App_69;
