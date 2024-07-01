import React from 'react';
import ItemComponent from './items';

const ItemData=()=> {
    const items = [
        { id: 1, text: 'An item' },
        { id: 2, text: 'A second item' },
        { id: 3, text: 'A third item' },
        // 可以添加更多項目
    ];

    return (
        <div>
            <ItemComponent items={items} />
        </div>
    );
}

export default ItemData;
