import React from 'react'

function Button({ handler, children }) {
    console.log(`called by ${children}`);
    return (
        <div>
            <div>
                <button onClick={handler}>{children}</button>
            </div>
        </div>
    )
}
export default React.memo(Button);