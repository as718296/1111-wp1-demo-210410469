import React from 'react'

export default function item() {
  return (
    <div className="filter-left">
        <div className="left-content">
        <form className="input-form">
            <input type="text" className="search-input" placeholder="search..." />
        </form>
        <h4>Company</h4>
        <article className="companies">
            <button className="company-btn">All</button>
            <button className="company-btn">Mercedes-Banz</button>
            <button className="company-btn">BMW</button>
            <button className="company-btn">AUDI</button>
            <button className="company-btn">Porsche</button>
        </article>
        </div>
    </div>

  )
}


