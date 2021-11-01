
import '../../App.css';
import React, { useState, useCallback } from 'react'
import RenderIncrement from '../../component/RenderIncrement'
import Button from '../../component/Button'

export default function Callback() {
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div id="inlineDiv">
            <RenderIncrement age={age} title='Age' />
            <Button handler={incrementAge}>increase age</Button><br />
            <RenderIncrement age={count} title='Count' />
            <Button handler={incrementCount}>increase count</Button>
        </div>
    )
}
