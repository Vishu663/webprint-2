import React from 'react'
import './Card.css'

export default function Card(props) {
    const { ctype, children } = props;

    return (
        <div className={ctype}>
            {children}
        </div>
    );
}

