import React, { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function ToolkitCounter() {
    const [name, setName] = useState(false)
    const count = useSelector(state => state.counter);
    const reference = useRef();
    reference.current = [];

    let word = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur at diam et dapibus. Cras euismod, tellus vel tempor porttitor, augue mi egestas tellus, vitae venenatis sapien ligula in erat. Sed metus nunc, posuere et dolor sit amet, tempus facilisis elit. Etiam vitae hendrerit ipsum. Proin dapibus diam sapien, interdum.';
    word = word.split(' ');
    // reference.current = new Array(word.length);

    const addToRefs = (el) => {
        if (el && !reference.current.includes(el)) {
            reference.current.push(el);
        }
    };

    useEffect(() => {
        const i = word.indexOf('mi');
        console.log(i);
        reference.current[i].scrollIntoView({ behavior: "smooth" });
    }, [name, word]);

    return (
        <div>
            <h2>The counter is: {count}</h2>
            <button>+</button>----
            <button>-</button>
            <button onClick={() => setName(!name)}>click button</button>
            <div>
                {
                    word.map((item) => {
                        return <p ref={addToRefs}>{item}</p>
                    })
                }
            </div>
        </div>
    )
}
