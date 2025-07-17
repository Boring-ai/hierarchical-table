import type { ColumnConfig, RowData } from "./types";

// when all columns are expanded
export const sampleData: RowData[] = [
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '4 & 5', star: '4' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '4 & 5', star: '5' },

    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '4 & 5', star: '4' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '4 & 5', star: '5' },

    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '4 & 5', star: '4' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '4 & 5', star: '5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '4 & 5', star: '4' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '4 & 5', star: '5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '4 & 5', star: '4' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '4 & 5', star: '5' },
];

export const columns: ColumnConfig[] = [
    { id: 'productFamily', label: 'Product Family', align: 'left', type: 'text', isExpandable: true },
    { id: 'productDescription', label: 'Product Description', align: 'left', type: 'text', isExpandable: true },
    { id: 'productCode', label: 'Product Code', align: 'center', type: 'text' },
    { id: 'platform', label: 'Platform', align: 'center', type: 'text'},
    { id: 'starBucket', label: 'Star Bucket', align: 'center', type: 'star', isExpandable: true },
    { id: 'star', label: 'Star', align: 'center', type: 'star' },
];

// when no column is expanded
export const sampleData2: RowData[] = [
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '4 & 5' },
    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '4 & 5' },
    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '4 & 5' },
];

export const columns2: ColumnConfig[] = [
    { id: 'productFamily', label: 'Product Family', align: 'left', type: 'text', isExpandable: true },
    { id: 'platform', label: 'Platform', align: 'center', type: 'text'},
    { id: 'starBucket', label: 'Star Bucket', align: 'center', type: 'star', isExpandable: true },
];

// when only productFamily is expanded
export const sampleData3: RowData[] = [
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '4 & 5' },

    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '4 & 5' },

    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '4 & 5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '4 & 5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '1, 2 & 3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '4 & 5' },
];

export const columns3: ColumnConfig[] = [
    { id: 'productFamily', label: 'Product Family', align: 'left', type: 'text', isExpandable: true },
    { id: 'productDescription', label: 'Product Description', align: 'left', type: 'text', isExpandable: true },
    { id: 'platform', label: 'Platform', align: 'center', type: 'text'},
    { id: 'starBucket', label: 'Star Bucket', align: 'center', type: 'star', isExpandable: true },
];

// when both productFamily and productDescription are expanded
export const sampleData4: RowData[] = [
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '1, 2 & 3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', productCode: '10000001', starBucket: '4 & 5' },

    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '1, 2 & 3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', productCode: '10000002', starBucket: '4 & 5' },

    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '1, 2 & 3' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', productCode: '10000003', starBucket: '4 & 5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '1, 2 & 3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', productCode: '10000004', starBucket: '4 & 5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '1, 2 & 3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', productCode: '10000005', starBucket: '4 & 5' },
];

export const columns4: ColumnConfig[] = [
    { id: 'productFamily', label: 'Product Family', align: 'left', type: 'text', isExpandable: true },
    { id: 'productDescription', label: 'Product Description', align: 'left', type: 'text', isExpandable: true },
    { id: 'productCode', label: 'Product Code', align: 'center', type: 'text' },
    { id: 'platform', label: 'Platform', align: 'center', type: 'text'},
    { id: 'starBucket', label: 'Star Bucket', align: 'center', type: 'star', isExpandable: true },
];

//when productFamily and starBucket are expanded
export const sampleData5: RowData[] = [
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Micro Usb White', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },

    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '18W Charger & Cable', productDescription: 'Wcd-Qc3a Type C White', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },

    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '20W Charger', productDescription: 'WCDV 20W PD', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'DV 22.5W QCPD White with Free PD Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },

    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '22.5W Charger & Cable', productDescription: 'WC DV 22.5W QCPD White with Type C Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },
];

export const columns5: ColumnConfig[] = [
    { id: 'productFamily', label: 'Product Family', align: 'left', type: 'text', isExpandable: true },
    { id: 'productDescription', label: 'Product Description', align: 'left', type: 'text', isExpandable: true },
    { id: 'platform', label: 'Platform', align: 'center', type: 'text'},
    { id: 'starBucket', label: 'Star Bucket', align: 'center', type: 'star', isExpandable: true },
    { id: 'star', label: 'Star', align: 'center', type: 'star' },
];

// when only starBucket is expanded
export const sampleData6: RowData[] = [
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '18W Charger & Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },

    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '20W Charger', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },

    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '1' },
    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '2' },
    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '1, 2 & 3', star: '3' },
    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '4' },
    { productFamily: '22.5W Charger & Cable', platform: 'Flipkart', starBucket: '4 & 5', star: '5' },
];

export const columns6: ColumnConfig[] = [
    { id: 'productFamily', label: 'Product Family', align: 'left', type: 'text', isExpandable: true },
    { id: 'platform', label: 'Platform', align: 'center', type: 'text'},
    { id: 'starBucket', label: 'Star Bucket', align: 'center', type: 'star', isExpandable: true },
    { id: 'star', label: 'Star', align: 'center', type: 'star' },
];

type Dataset = {
  primaryColumn: string;
  data: RowData[];
  columns: ColumnConfig[];
};

/**
 * Returns dataset based on which columns are expanded.
 * Checks each column's presence individually using switch(true)
 */
export function getDatasetForExpandedColumns(expandedColumns: Set<string>): Dataset {
  const hasProductFamily = expandedColumns.has('productFamily');
  const hasProductDescription = expandedColumns.has('productDescription');
  const hasStarBucket = expandedColumns.has('starBucket');

  switch (true) {
    // all three expanded
    case hasProductFamily && hasProductDescription && hasStarBucket:
      return { primaryColumn: 'productFamily', data: sampleData, columns };

    // productFamily + productDescription
    case hasProductFamily && hasProductDescription:
      return { primaryColumn: 'productFamily', data: sampleData4, columns: columns4 };

    // productFamily + starBucket
    case hasProductFamily && hasStarBucket:
      return { primaryColumn: 'productFamily', data: sampleData5, columns: columns5 };

    // only productFamily
    case hasProductFamily:
      return { primaryColumn: 'productFamily', data: sampleData3, columns: columns3 };

    // only starBucket
    case hasStarBucket:
      return { primaryColumn: 'productFamily', data: sampleData6, columns: columns6 };

    // none expanded
    default:
      return { primaryColumn: 'productFamily', data: sampleData2, columns: columns2 };
  }
}