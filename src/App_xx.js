import React, { useState, useEffect } from 'react';
import data from './blogData_69';

const App_xx = () => {
  const [blog, setBlogs] = useState(data);
  console.log('blogs', blog);
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
          {blog.map((blog) => {
            const { id, img, tilte, desc, category } = blog;
            return (
              <article className='blog'>
                <img src={img} alt='Coffee photo' className='img blog-img' />
                <div className='blog-content'>
                  <span>{category}</span>
                  <h3>{tilte}</h3>
                  <p>{desc}</p>
                  <div className='item-control'>
                    <a href='#'>read more</a>
                    <div className='btn-container'>
                      <button type='button' className='edit-btn'>
                        {' '}
                        edit{' '}
                      </button>
                      <button type='button' className='delete-btn'>
                        {' '}
                        delete{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default App_xx;
