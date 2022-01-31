import React from 'react';

import '../style.css'

const Dropdown = () => {
    return (
        <div className={'dropdown'}>
            <div className={'dropdown-title'}>Цвет
                <div className={'dropdown-content'}>
                    <p>Желтый</p>
                    <p>Красный</p>
                    <p>Зеленый</p>
                </div>
            </div>
            <p>200 грн</p>
        </div>
    );
};

export default Dropdown;