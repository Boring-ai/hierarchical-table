import { RowData, TableData } from "./types";

export function getDataForExpandedColumns(expandedColumns: Set<string>, data: TableData): RowData[] | undefined {
    const hasProductFamily = expandedColumns.has('productFamily');
    const hasProductDescription = expandedColumns.has('productDescription');
    const hasStarBucket = expandedColumns.has('starBucket');
  
    // All columns expanded (Level 6)
    if (hasProductFamily && hasProductDescription && hasStarBucket) {
      return data.level6;
    }
  
    // productFamily + starBucket (Level 5, exclude productCode)
    if (hasProductFamily && hasStarBucket) {
      return data.level5;
    }
  
    // starBucket expanded (Level 4)
    if (hasStarBucket) {
      return data.level4;
    }
  
    // productFamily + productDescription expanded (Level 3)
    if (hasProductFamily && hasProductDescription) {
      return data.level3;
    }
  
    // only productFamily expanded (Level 2)
    if (hasProductFamily) {
      return data.level2;
    }
  
    // none expanded (Level 1)
    return data.level1;
  }