import { Minus, Plus } from "lucide-react";
import type { ColumnConfig } from "./types";
import React, { useCallback } from "react";

interface Props {
    column: ColumnConfig;
    expandedColumns: Set<string>;
    setExpandedColumns: (columns: Set<string>) => void;
}

function TableHeadCell({ column, expandedColumns, setExpandedColumns }: Props) {
    const { isExpandable, label, align } = column;

    const isExpanded = expandedColumns.has(column.id);

    const toggleColumnExpansion = useCallback(() => {
        const newSet = new Set(expandedColumns);
        newSet.has(column.id) ? newSet.delete(column.id) : newSet.add(column.id);
        setExpandedColumns(newSet);
    }, [column.id, expandedColumns, setExpandedColumns]);

    if (isExpandable) {
        return (
            <th className='px-4 py-2 border-b border-[#edeff4] font-medium text-xs'>
                <div className="flex items-center" style={{ justifyContent: align }}>
                    <span>{label}</span>
                    <button
                        onClick={toggleColumnExpansion}
                        className="ml-2 p-1 rounded hover:bg-gray-200 transition-colors"
                        title={isExpanded ? 'Hide breakdown' : 'Show breakdown'}
                    >
                        {isExpanded ?
                            <Minus size={16} className="text-red-600" /> :
                            <Plus size={16} className="text-green-600" />
                        }
                    </button>
                </div>
            </th>);
    }

    return <th className='px-4 py-2 border-b border-[#edeff4] font-medium text-xs' align={align}>{label}</th>;
}

export default TableHeadCell;