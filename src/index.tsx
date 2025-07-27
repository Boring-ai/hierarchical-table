import './style.css';
import BaseTable from './components/AgGridHierarchicalTable/AgGridHierarchicalTable';
import { TableData } from './components/AgGridHierarchicalTable/types';


interface Props {
  updateData: (data: TableData) => void;
  data?: TableData;
  emitOnClick: () => void;
  emitOnChange: () => void;
}

export default function Hierarchicaltable(props: Props) {
  const { updateData, data, emitOnClick } = props;

  return <BaseTable data={data} updateData={updateData} emitOnClick={emitOnClick} />;
}