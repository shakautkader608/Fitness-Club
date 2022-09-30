import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div className='break'>
            <p>Add A Break</p>
            <div className='break-details'>
                <button className='btn-second'>10s</button>
                <button className='btn-second'>20s</button>
                <button className='btn-second'>30s</button>
                <button className='btn-second'>40s</button>
            </div>
        </div>
    );
};

export default Break;