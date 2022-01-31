import React from 'react';

import '../style.css'

const Checkbox = () => {
    return (
        <div className={'items'}>
            <div className={'item'}>
                <div className={'box'}></div>
                <p>100 мл</p>
            </div>
            <div className={'item'}>
                <div className={'box'}></div>
                <p>200 мл</p>
            </div>
            <div className={'item'}>
                <div className={'box'}></div>
                <p>300 мл</p>
            </div>


        </div>
    );
};

export default Checkbox;