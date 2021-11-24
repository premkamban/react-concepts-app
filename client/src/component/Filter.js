import React, { useState } from 'react';
import FilterBuilder from 'devextreme-react/filter-builder';
import { formatterJson, Validate, errorlist } from '../utils/formatter'
import 'devextreme/dist/css/dx.light.css';
import { fields, filter } from '../data'

export default function Filter() {
    console.log('---displaying soemthing---');
    console.log(errorlist);
    let [filtered, setFiltered] = useState(filter);
    let [off, setoff] = useState(false);
    let [arr, setArr] = useState(['ha mo', 'bmo', 'b', 'eyem', 'pad mo', 'son mo ga', 'sr vi', 'kar', 'kadar', 'su', 'indo', 'tar', 'neths']);
    function onValueChanged(e) {
        setFiltered(e.value);
        let json = formatterJson(e.value);
        // console.log(json);
        // Validate(json);
    }
    return (
        <div>
            <button onClick={() => setoff(false)}>reset</button>
            <FilterBuilder value={filtered} fields={fields} onValueChanged={(e) => onValueChanged(e)}></FilterBuilder>
            {arr.map((a) => <div onClick={() => setoff(true)}>{a} {off && 'to fuck'}</div>)}
        </div>
    )
}

