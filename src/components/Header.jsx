import { useState } from 'react'

function Header({notes , sortBy , onSort}) {


    return (
        <div className="header">
            <h1>Notes App({notes.length})</h1>
            <div className="select">
                <select value={sortBy} onChange={onSort}>
                    <option value={'newest'}>newest</option>
                    <option value={'oldest'}>oldest</option>
                    <option value={'completed'}>completed</option>
                </select>
            </div>
        </div>
    )
}


export default Header;