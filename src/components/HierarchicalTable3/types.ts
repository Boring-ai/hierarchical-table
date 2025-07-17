export interface RowData {
    [key: string]: string | number ;
}

export interface ColumnConfig {
    id: string;
    label: string;
    align: 'left' | 'center' | 'right';
    className?: string;
    type: 'text' | 'star' | 'number';
    isExpandable?: boolean;
}

export interface TableRow {
    originalData: RowData;
    isLastInGroup?: boolean;
    span?: Record<string, number>;
    visible?: Record<string, boolean>;
}

export interface TableConfig {
    primaryColumn: string;
    data: RowData[];
    columns: ColumnConfig[];
}