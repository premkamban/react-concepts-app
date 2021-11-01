import React from 'react'

function Incrementer({ handler }) {
    console.log('rendering Incrementer');
    return (
        <div>
            <button onClick={handler}>Click to increment your age</button>
        </div>
    )
}

export default React.memo(Incrementer);
