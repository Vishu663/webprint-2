import React from 'react'
import './card.css'

export default function Card(props) {
    const { ctype, children } = props;

    return (
        <div className={ctype}>
            {children}
        </div>
    );
}

