import React, { useState, useEffect } from 'react';
import List_69 from './components/List_69';
import Alert_69 from './components/Alert_69';

const App_69 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const handleSumbit = (e) => {
    e.preventDefault(); //自己控制
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
      //
    } else {
      showAlert(true, 'value change', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSumbit}>
          {alert.show && <Alert_69 {...alert} />}
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
        {}
      </section>
    </>
  );
};

export default App_69;
