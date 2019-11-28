import React from 'react';
import './Resource.css'




const Resource = (props) => {
    return (
            <div key={props.index} className='resource'>
                <span>{props.name}</span>
                <span>{props.totals} $</span>
                <button className='hide' onClick={props.removeResouce}>
                    &#10008;
                </button>
            </div>
    );
};

export default Resource;