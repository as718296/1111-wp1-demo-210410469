import React, { useState, useEffect } from 'react';
import data from './blogData_69';
import Blog_list_69 from './components/Blog_List_69';

const App_xx = () => {
  const [blogs, setBlogs] = useState(data);
  console.log('blogs', blogs);

  const removeItem = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className='filter-container'>
          <button type='button' className='filter-btn' data-id='all'>
            all
          </button>
          <button type='button' className='filter-btn' data-id='lifestyle'>
            lifestyle
          </button>
          <button type='button' className='filter-btn' data-id='travel'>
            travel
          </button>
        </div>
        <div className='blogs-center'>
          <Blog_list_69 key={1} blogs={blogs} removeItem={removeItem} />
        </div>
      </section>
    </>
  );
};

export default App_xx;
