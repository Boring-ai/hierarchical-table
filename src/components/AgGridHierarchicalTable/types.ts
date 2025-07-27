export interface WeekData {
    incrementalStarCount?: {value?: string| number, color?: string};
    rating?: {value?: string| number, color?: string};
    starCount?: {value?: string| number, color?: string};
    incrementalStarContribution?: {value?: string| number, color?: string};
  }
export interface RowData {
    productFamily?: string;
    productDescription?: string;
    productCode?: string | number;
    platform?: string;
    starBucket?: string;
    star?: string | number;
  
    // Dynamic week keys like wk1, wk2, wk3...
    [weekKey: string]: WeekData | string | number | undefined;
  }

  export interface WeekConfig {
    headerName: string;
    children: {
        field: string;
        headerName: string;
        spanRows?: boolean;
    }[]
  }

  export interface TableData {
    level1?: RowData[];
    level2?: RowData[];
    level3?: RowData[];
    level4?: RowData[];
    level5?: RowData[];
    level6?: RowData[];
    weeks?: WeekConfig[];
    selectedProductFamily?: string;
    selectedProductDescription?: string;
  }