import { useState } from "react";
import TableHeadCell from "./TableHeadCell";
import TableBodyCell from "./TableBodyCell";
import { getDatasetForExpandedColumns } from "./data";
import React from "react";

function HierarchicalTable3() {
    const [expandedColumns, setExpandedColumns] = useState(new Set<string>());
    const { data, columns, primaryColumn } = getDatasetForExpandedColumns(expandedColumns);

    return (
        <div className="overflow-x-auto border border-[#edeff4] rounded-lg">
            <table className="w-full border-collapse ">
                <thead>
                    <tr className="bg-[#f9fafd]">
                        {columns.map(column => <TableHeadCell column={column} expandedColumns={expandedColumns} setExpandedColumns={setExpandedColumns} />)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className={index > 0 && row[primaryColumn] !== data[index - 1][primaryColumn] ? 'border-t border-[#edeff4]' : ''}
                        >
                            {columns.map((column) => {
                                if (
                                    index > 0 &&
                                    row[column.id] === data[index - 1][column.id] &&
                                    columns
                                        .slice(0, columns.findIndex(c => c.id === column.id))
                                        .every(leftCol => row[leftCol.id] === data[index - 1][leftCol.id])
                                ) {
                                    return <td></td>;
                                }

                                return <TableBodyCell value={row[column.id]} align={column.align} type={column.type} />
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default HierarchicalTable3;