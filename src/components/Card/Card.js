import React from 'react';

import '../style.css'
import Text from "../Text/Text";
import Picture from "../Picture/Picture";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import Counter from "../Counter/Counter";

const Card = () => {
    return (
        <div className={'card'}>
            <Picture/>
            <Text/>
            <Dropdown/>
            <Checkbox/>
            <div className={'counter-button'}>
                <Counter/>
                <Button/>
            </div>
        </div>
    );
};

export {Card};