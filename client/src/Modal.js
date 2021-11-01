import React from 'react'
import ReactDOM from 'react-dom';

export default function Modal() {
    return ReactDOM.createPortal(
        <div>
            This is an Modal
        </div>
        , document.getElementById('prem'))
}
