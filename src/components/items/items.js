import React from 'react';

export default function ItemComponent({ items }) {
    return (
        <div className="card" style={{ width: "22rem" }}>
            <div className="card-header">
                Featured
            </div>
            <ul className="list-group list-group-flush">
                {items.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
