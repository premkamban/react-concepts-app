import React, { useEffect } from 'react';

function RenderIncrement({ age: incrementNumber, title }) {
    useEffect(
        (title) => {
            return () => console.log(`rendering placeholder for ${title}`);
        }, []
    );

    return (
        <div>
            Rendering {title}:  {incrementNumber}
        </div>
    )
}

export default React.memo(RenderIncrement)
