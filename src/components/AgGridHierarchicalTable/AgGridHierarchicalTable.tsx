import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { type ColDef, type ColGroupDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import type { RowData, TableData } from "./types";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { getDataForExpandedColumns } from "./data";

ModuleRegistry.registerModules([AllCommunityModule]);

const defaultColDef: ColDef = {
    sortable: false,
    wrapText: true,
    resizable: false,
    suppressMovable: true,
    headerStyle: {
        backgroundColor: "#F9F9FF",
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
    },
    cellStyle: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
    }

};

const defaultGroupDef: Partial<ColGroupDef> = {
    headerStyle: {
        backgroundColor: '#F9F9FF',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
    },
}

const spanRows: ColDef["spanRows"] = (params) => {
    const { nodeA, nodeB, valueA, valueB, api, column } = params;


    if (valueA !== valueB) {
        return false;
    }

    const allColumns = api.getAllDisplayedColumns();
    const currentColumnIndex = allColumns.findIndex(col => col.getColId() === column.getColId());
    const leftColumns = currentColumnIndex === -1 ? [] : allColumns.slice(0, currentColumnIndex);

    return leftColumns.every(col => nodeA?.data[col.getColId()] === nodeB?.data[col.getColId()]);
}

interface Props {
    data: TableData;
    updateData: (data: TableData) => void;
    emitOnClick: () => void;
}

function GridExample(props: Props) {
    const { emitOnClick, updateData } = props;
    const { weeks } = props.data;
    const [expandedColumns, setExpandedColumns] = useState<Set<string>>(new Set());
    const data = useMemo(() => getDataForExpandedColumns(expandedColumns, props.data), [expandedColumns, props.data]);

    const columnDefs = useMemo<(ColDef<RowData> | ColGroupDef<RowData>)[]>(() => [
        {
            field: "productFamily",
            spanRows,
            pinned: "left",
            width: 180,
            onCellClicked: (event) => {
                const productFamily = event.data?.productFamily;
                if (!productFamily) return;
                updateData({
                    ...props.data,
                    selectedProductFamily: productFamily,
                })
                emitOnClick();
            },
            headerComponent: () =>
                <div className="flex items-center">
                    <span>Product Family</span>
                    <button
                        className="ml-2 p-1 rounded hover:bg-gray-200 transition-colors"
                        onClick={() => setExpandedColumns(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has("productFamily")) {
                                newSet.delete("productFamily");
                                newSet.delete("productDescription");
                            } else {
                                newSet.add("productFamily");
                            }
                            return newSet;
                        })}
                    >
                        {expandedColumns.has("productFamily") ?
                            <Minus size={16} /> :
                            <Plus size={16} />
                        }
                    </button>
                </div>
        },
        ...(expandedColumns.has("productFamily") ? [
            {
                field: "productDescription",
                spanRows,
                pinned: "left",
                width: 220,
                onCellClicked: (event) => {
                    const productDescription = event.data?.productDescription as string | undefined;
                    const productFamily = event.data?.productFamily as string | undefined;
                    if (!productDescription || !productFamily) return;
                    updateData({
                        ...props.data,
                        selectedProductDescription: productDescription,
                        selectedProductFamily: productFamily
                    })
                    emitOnClick();
                },
                headerComponent: () =>
                    <div className="flex items-center justify-between">
                        <span>Product Description</span>
                        <button
                            className="ml-2 p-1 rounded hover:bg-gray-200 transition-colors"
                            onClick={() => setExpandedColumns(prev => {
                                const newSet = new Set(prev);
                                newSet.has("productDescription") ? newSet.delete("productDescription") : newSet.add("productDescription");
                                return newSet;
                            })}
                        >
                            {expandedColumns.has("productDescription") ?
                                <Minus size={16} /> :
                                <Plus size={16} />
                            }
                        </button>
                    </div>
            },
        ] as ColDef[] : []),
        ...(expandedColumns.has("productDescription") ? [
            {
                field: "productCode",
                spanRows,
                pinned: "left",
                width: 130
            },
        ] as ColDef[] : []),
        {
            field: "platform",
            spanRows,
            pinned: "left",
            width: 110
        },
        {
            field: "starBucket",
            spanRows,
            pinned: "left",
            width: 140,
            valueFormatter: (params) => `${params.value} ☆`,
            headerComponent: () =>
                <div className="flex items-center">
                    <span>Star Bucket</span>
                    <button
                        className="ml-2 p-1 rounded hover:bg-gray-200 transition-colors"
                        onClick={() => setExpandedColumns(prev => {
                            const newSet = new Set(prev);
                            newSet.has("starBucket") ? newSet.delete("starBucket") : newSet.add("starBucket");
                            return newSet;
                        })}
                    >
                        {expandedColumns.has("starBucket") ?
                            <Minus size={16} /> :
                            <Plus size={16} />
                        }
                    </button>
                </div>
        },
        ...(expandedColumns.has("starBucket") ? [
            { field: "star", pinned: "left", width: 60, valueFormatter: (params) => `${params.value} ☆` },
        ] as ColDef[] : []),
        ...(weeks?.map(week => ({
            headerName: week.headerName,
            children: week.children.map(child => ({
                field: child.field,
                headerName: child.headerName,
                cellStyle: (params) => {
                    return {
                        color: params?.value?.color
                    }
                },
                spanRows: child.spanRows ? (params) => {
                    const { nodeA, nodeB, valueA, valueB } = params;
                    if (valueA?.value !== valueB?.value) {
                        return false;
                    }
                    if (nodeA?.data['productFamily'] === nodeB?.data['productFamily'] && nodeA?.data['productDescription'] === nodeB?.data['productDescription']) {
                        return true;
                    }
                    return false;
                } : false,
                valueFormatter: (params) => params?.value?.value
            }))
        })) as ColGroupDef[] || [])
    ], [expandedColumns, weeks]);

    const domLayout = (data?.length ?? 0) * 40 < 800 ? 'autoHeight' : 'normal';


    return (
        <div
            className="ag-theme-alpine"
            style={{ width: '100%', height: domLayout === 'autoHeight' ? 'auto' : '800px' }}
        >
            <AgGridReact<RowData>
                rowData={data}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                enableCellSpan
                defaultColGroupDef={defaultGroupDef}
                suppressColumnVirtualisation={false}
                domLayout={domLayout}
                rowBuffer={10}
                suppressRowHoverHighlight
            />
        </div >
    );
};

export default GridExample;