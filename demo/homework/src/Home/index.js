import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/nav'
import Picture from './components/picture'
import './components/components.css'

const Home = () =>{
    const [data, setData] = useState([{value: 'All'}])
    
    return <div className='body'>
        <Navbar />
        <div className='row'>
            <Sidebar select={setData}/>
            <Picture listCard={data}/>
        </div>
        
    </div>
}

export default Home