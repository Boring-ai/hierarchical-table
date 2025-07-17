import type { ColumnConfig, RowData, TableConfig } from "./types";

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

export const tableConfig: TableConfig = {
    primaryColumn: 'productFamily',
    columns: columns,
    data: sampleData,
};