import React, { useState, useMemo, useCallback } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Column {
    key: string;
    label: string;
    _isBreakdown?: boolean;
    _parentColumn?: string;
}

type BreakdownConfig = Record<string, {
    key: string;
    label: string;
    distributeValues?: string[];
}>;

type BreakdownData = {
    value: string;
} & Record<string, string | number>;

type Data = Record<string, string | number | BreakdownData[]>;

// Types for breakdown metadata
interface BreakdownInfo {
    parentColumn: string;
    breakdownColumn: string;
    itemIndex: number;
    totalItems: number;
}

// Types for processed row data
interface ProcessedRow {
    [key: string]: any;
    _rowType: 'normal' | 'breakdown';
    _isFirstBreakdown?: boolean;
    _breakdownCount?: number;
    _expandedColumns?: string[];
    _breakdowns?: BreakdownInfo[];
    _parentRowSpan?: number;
}

// Types for breakdown row processing
interface BreakdownRow {
    [key: string]: any;
    _breakdowns?: BreakdownInfo[];
}

interface Props {
    data: Data[];
    columns: Column[];
    breakdownConfig: BreakdownConfig;
}

const HierarchicalTable = ({
    data,
    columns,
    breakdownConfig = {}
}: Props) => {
    const [expandedColumns, setExpandedColumns] = useState(new Set<string>());

    const addBreakdownColumns = useCallback((column: Column, result: Column[]) => {
        if (expandedColumns.has(column.key) && breakdownConfig[column.key]) {
            const breakdownColumn = {
                key: breakdownConfig[column.key].key,
                label: breakdownConfig[column.key].label,
                _isBreakdown: true,
                _parentColumn: column.key
            };
            result.push(breakdownColumn);
            addBreakdownColumns(breakdownColumn, result);
        }
    }, [expandedColumns, breakdownConfig]);

    // Toggle column expansion
    const toggleColumnExpansion = useCallback((columnKey: string) => {
        setExpandedColumns(prevExpanded => {
            const newExpanded = new Set(prevExpanded);
            if (newExpanded.has(columnKey)) {
                newExpanded.delete(columnKey);
            } else {
                newExpanded.add(columnKey);
            }
            return newExpanded;
        });
    }, []);

    // Get visible columns including breakdown columns
    const visibleColumns = useMemo(() => {
        const result: Column[] = [];

        columns.forEach(column => {
            result.push(column);
            addBreakdownColumns(column, result);
        });

        return result;
    }, [columns, expandedColumns, breakdownConfig]);

    // Process data to create hierarchical rows
    const processedRows = useMemo(() => {
        const result: ProcessedRow[] = [];

        data.forEach(originalRow => {
            const expandedBreakdowns: {
                parentColumn: string;
                breakdownColumn: string;
                breakdownData: BreakdownData[];
            }[] = [];

            // Check which columns are expanded for this row
            columns.forEach(column => {
                if (expandedColumns.has(column.key) && breakdownConfig[column.key]) {
                    const breakdownData = originalRow[breakdownConfig[column.key].key];
                    if (Array.isArray(breakdownData) && breakdownData.length > 0) {
                        expandedBreakdowns.push({
                            parentColumn: column.key,
                            breakdownColumn: breakdownConfig[column.key].key,
                            breakdownData: breakdownData
                        });
                    }
                }
            });

            if (expandedBreakdowns.length === 0) {
                // No breakdowns, add row as is - but clean any array values
                const cleanRow: ProcessedRow = { _rowType: 'normal' };

                // Copy non-array properties from original row
                Object.keys(originalRow).forEach(key => {
                    const value = originalRow[key];
                    if (!Array.isArray(value)) {
                        cleanRow[key] = value as string | number;
                    }
                });

                result.push(cleanRow);
            } else {
                // Handle breakdowns - create rows for each breakdown item
                const breakdownRows: BreakdownRow[] = [];

                // Calculate total rows for each parent breakdown
                const parentRowCounts: { [key: string]: number } = {};
                expandedBreakdowns.forEach(breakdown => {
                    breakdown.breakdownData.forEach((breakdownItem, index) => {
                        const parentKey = `${breakdown.parentColumn}-${index}`;
                        let totalRows = 1;

                        // Check if this breakdown item has nested breakdowns
                        if (expandedColumns.has(breakdown.breakdownColumn) && breakdownConfig[breakdown.breakdownColumn]) {
                            const nestedData = breakdownItem[breakdownConfig[breakdown.breakdownColumn].key];
                            if (Array.isArray(nestedData) && nestedData.length > 0) {
                                totalRows = nestedData.length;
                            }
                        }
                        parentRowCounts[parentKey] = totalRows;
                    });
                });

                // Process first level breakdowns
                expandedBreakdowns.forEach(breakdown => {
                    breakdown.breakdownData.forEach((breakdownItem, index) => {
                        const newRow: BreakdownRow = {};

                        // Set breakdown column value
                        newRow[breakdown.breakdownColumn] = breakdownItem.value;

                        // Store breakdown info for rowspan calculation
                        newRow._breakdowns = [{
                            parentColumn: breakdown.parentColumn,
                            breakdownColumn: breakdown.breakdownColumn,
                            itemIndex: index,
                            totalItems: breakdown.breakdownData.length
                        }];

                        // Check if this breakdown item has nested breakdowns
                        if (expandedColumns.has(breakdown.breakdownColumn) && breakdownConfig[breakdown.breakdownColumn]) {
                            const nestedData = breakdownItem[breakdownConfig[breakdown.breakdownColumn].key];
                            if (Array.isArray(nestedData) && nestedData.length > 0) {
                                // Create a row for each nested breakdown item
                                nestedData.forEach((nestedItem, nestedIndex) => {
                                    const nestedRow: BreakdownRow = { ...newRow };

                                    // Set nested breakdown column value
                                    nestedRow[breakdownConfig[breakdown.breakdownColumn].key] = nestedItem.value;

                                    // Add nested breakdown info
                                    nestedRow._breakdowns = [
                                        ...newRow._breakdowns!,
                                        {
                                            parentColumn: breakdown.breakdownColumn,
                                            breakdownColumn: breakdownConfig[breakdown.breakdownColumn].key,
                                            itemIndex: nestedIndex,
                                            totalItems: nestedData.length
                                        }
                                    ];

                                    breakdownRows.push(nestedRow);
                                });
                            } else {
                                // No nested breakdowns, add the parent row as is
                                breakdownRows.push(newRow);
                            }
                        } else {
                            // No nested breakdowns, add the parent row as is
                            breakdownRows.push(newRow);
                        }
                    });
                });

                // Group breakdown rows by their parent breakdown
                const groupedRows: { [key: string]: BreakdownRow[] } = {};
                breakdownRows.forEach(row => {
                    const firstBreakdown = row._breakdowns?.[0];
                    if (firstBreakdown) {
                        const groupKey = `${firstBreakdown.parentColumn}-${firstBreakdown.itemIndex}`;
                        if (!groupedRows[groupKey]) {
                            groupedRows[groupKey] = [];
                        }
                        groupedRows[groupKey].push(row);
                    }
                });

                // Process breakdown rows and add metadata
                let globalIndex = 0;
                Object.values(groupedRows).forEach(group => {
                    group.forEach((row, groupIndex) => {
                        const processedRow: ProcessedRow = { _rowType: 'breakdown' };

                        // Copy non-array properties from original row
                        Object.keys(originalRow).forEach(key => {
                            const value = originalRow[key];
                            if (!Array.isArray(value) && (typeof value === 'string' || typeof value === 'number')) {
                                processedRow[key] = value;
                            }
                        });

                        // Copy properties from breakdown row
                        Object.keys(row).forEach(key => {
                            if (key !== '_breakdowns') {
                                const value = row[key];
                                if (typeof value === 'string' || typeof value === 'number') {
                                    processedRow[key] = value;
                                }
                            }
                        });

                        // Add breakdown metadata
                        processedRow._isFirstBreakdown = groupIndex === 0;
                        processedRow._breakdownCount = group.length;
                        processedRow._expandedColumns = expandedBreakdowns.map(b => b.parentColumn);
                        processedRow._breakdowns = row._breakdowns;

                        // Calculate rowspan for parent columns based on original data
                        const firstBreakdown = row._breakdowns?.[0];
                        if (firstBreakdown) {
                            const parentKey = `${firstBreakdown.parentColumn}-${firstBreakdown.itemIndex}`;
                            processedRow._parentRowSpan = parentRowCounts[parentKey] || 1;
                        }

                        result.push(processedRow);
                        globalIndex++;
                    });
                });
            }
        });

        return result;
    }, [data, columns, expandedColumns, breakdownConfig]);

    const renderCell = useCallback((row: ProcessedRow, column: Column, rowIndex: number) => {
        const isParentColumn = row._rowType === 'breakdown' &&
            row._expandedColumns && row._expandedColumns.includes(column.key);
        const isBreakdownColumn = column._isBreakdown;

        // For breakdown rows, only render parent column cell on first row with rowspan
        if (isParentColumn && !row._isFirstBreakdown) {
            return null; // Don't render cell - it's covered by rowspan
        }

        // For normal rows, don't render breakdown columns
        if (row._rowType === 'normal' && isBreakdownColumn) {
            return null;
        }

        let cellValue = row[column.key];

        // Ensure cellValue is a primitive (string, number, boolean, null, undefined)
        if (typeof cellValue === 'object' && cellValue !== null) {
            cellValue = JSON.stringify(cellValue);
        }

        // Calculate rowspan for parent columns
        let rowSpan = 1;
        if (isParentColumn && row._isFirstBreakdown) {
            // Use the pre-calculated rowspan based on original data structure
            rowSpan = row._parentRowSpan || 1;
        }

        return (
            <td
                key={`${rowIndex}-${column.key}`}
                className={`
          border border-gray-300 px-4 py-2 text-left
          ${isBreakdownColumn ? 'bg-blue-50' : ''}
          ${isParentColumn ? 'bg-gray-50 align-top' : ''}
        `}
                rowSpan={rowSpan}
            >
                <span>{cellValue}</span>
            </td>
        );
    }, [processedRows]);

    const shouldRenderCell = useCallback((row: ProcessedRow, column: Column) => {
        const isParentColumn = row._rowType === 'breakdown' &&
            row._expandedColumns && row._expandedColumns.includes(column.key);
        const isBreakdownColumn = column._isBreakdown;

        // Skip parent column cells for non-first breakdown rows
        if (isParentColumn && !row._isFirstBreakdown) {
            return false;
        }

        // Skip breakdown columns for normal rows
        if (row._rowType === 'normal' && isBreakdownColumn) {
            return false;
        }

        // For nested breakdowns, check if this column should be rendered
        if (row._rowType === 'breakdown' && isBreakdownColumn) {
            // Check if this breakdown column is actually expanded
            if (!expandedColumns.has(column._parentColumn || '')) {
                return false;
            }
        }

        return true;
    }, [expandedColumns, breakdownConfig]);

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        {visibleColumns.map(column => (
                            <th
                                key={column.key}
                                className="border border-gray-300 px-4 py-2 text-left font-semibold relative"
                            >
                                <div className="flex items-center justify-between">
                                    <span>{column.label}</span>
                                    {breakdownConfig[column.key] && (
                                        <button
                                            onClick={() => toggleColumnExpansion(column.key)}
                                            className="ml-2 p-1 rounded hover:bg-gray-200 transition-colors"
                                            title={expandedColumns.has(column.key) ? 'Hide breakdown' : 'Show breakdown'}
                                        >
                                            {expandedColumns.has(column.key) ?
                                                <Minus size={16} className="text-red-600" /> :
                                                <Plus size={16} className="text-green-600" />
                                            }
                                        </button>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {processedRows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {visibleColumns.map(column =>
                                shouldRenderCell(row, column) ?
                                    renderCell(row, column, rowIndex) : null
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HierarchicalTable;