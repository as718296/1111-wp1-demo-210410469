import React, { useState, useEffect } from 'react';
import List_69 from './components/List_69';
import Alert_69 from './components/Alert_69';

const getLocalsStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const App_69 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([getLocalsStorage()]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const handleSumbit = (e) => {
    e.preventDefault(); //自己控制
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  };

  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };

  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSumbit}>
          {alert.show && <Alert_69 {...alert} removeAlert={showAlert} />}
          <h3>Grocery Bud - 210410469</h3>
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='e.g.eggs'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button type='submit' className='submit-btn'>
              submit
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List_69 items={list} removeItem={removeItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default App_69;
