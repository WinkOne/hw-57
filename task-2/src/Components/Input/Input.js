import React from 'react';
import './Input.css'




const Input = (props) => {
    return (
        <div className='inputRegion'>
            <input className='inp1 inp' onChange={props.add} type="text" placeholder='Name Resource'/>
            <input className='inp2 inp' onChange={props.addTotal} type="number" placeholder='Sum: $'/>
            <input className='inp3 inp' onClick={props.getAdd} type="button" value='Add'/>
        </div>
    );
};

export default Input;