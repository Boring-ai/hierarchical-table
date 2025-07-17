import React from "react";

interface Props {
    value: string | number;
    align: 'left' | 'center' | 'right';
    type: 'text' | 'star' | 'number';
}

function TableBodyCell({ value, align, type }: Props) {
    return <td className='px-4 py-2 text-sm' align={align}>{type === 'star' ? `${value} ☆` : value}</td>;
}

export default TableBodyCell;