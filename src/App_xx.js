import React, { useState, useEffect } from 'react';
import data from './blogData_69';
import Blog_list_69 from './components/Blog_List_69';

const App_xx = () => {
  const [blogs, setBlogs] = useState(data);
  console.log('blogs', blogs);

  const removeItem = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };
  const clearBlogs = () => {
    setBlogs([]);
  };

  const filterItem = (category) => {
    if (category === 'all') {
      setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className='filter-container'>
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterItem('all')}
          >
            all
          </button>
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterItem('lifestyle')}
          >
            lifestyle
          </button>
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterItem('travel')}
          >
            travel
          </button>
        </div>
        <div className='blogs-center'>
          <Blog_list_69 key={1} blogs={blogs} removeItem={removeItem} />
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
    </>
  );
};

export default App_xx;
