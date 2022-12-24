import React from 'react';
import Blog_69 from './Blog_69';

const Blog_list_69 = ({ blogs }) => {
  return (
    <div className='blogs-center'>
      {blogs.map((blog) => {
        const { id, img, tilte, desc, category } = blog;
        return (
          <Blog_69
            id={id}
            img={img}
            tilte={tilte}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default Blog_list_69;
