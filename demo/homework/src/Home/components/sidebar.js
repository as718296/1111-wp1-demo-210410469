import { useState } from 'react'
import './components.css'
const Sidebar = ({ select }) =>{
    const [value, setValue] = useState("All")
    async function allChange(value) {
         
        // console.log('sidebar_mydata', mydata)
        // console.log('sidebar_value', value)
       await set_value(value)
       await set_return(value)
    }
    function set_value(value) {
        setValue(value)
    }
    function set_return(value) {
        select(function(){
            return [{value}]
        })
    }

    return <div className="filter-left">
        <div className="left-content">
            <form className="input-form">
                <input type="text" className="search-input" placeholder="search..." />
            </form>
            <h4>王永昌鐘錶行</h4>
            <article className="companies">
                <button className="company-btn" onClick={() => allChange('All')}>All</button>
                <button className="company-btn" onClick={() => allChange('AC1500')}>AC1500.</button>
                <button className="company-btn" onClick={() => allChange('AC1392')}>AC1392.</button>
                <button className="company-btn" onClick={() => allChange('AC1395')}>AC1395.</button>
                <button className="company-btn" onClick={() => allChange('AC0037')}>AC0037.</button>
                <button className="company-btn" onClick={() => allChange('AB7614')}>AB7614.</button>
                <button className="company-btn" onClick={() => allChange('AB3112')}>AB3112.</button>
            </article>
            <div className='twotwo'>
                <button className="company-btn-one" onClick={() => allChange('clear')}>Clear All</button>
                <button className="company-btn-two" onClick={() => allChange('All')}>Fetch All</button>
            </div>
        </div>
    </div>

}

export default Sidebar