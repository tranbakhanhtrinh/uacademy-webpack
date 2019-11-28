import React from 'react';

import './Loading.scss';

const loading = props => {
    return(
        <div className='loading'>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
            <div className='loading__square'></div>
        </div>
    )
}

export default loading;