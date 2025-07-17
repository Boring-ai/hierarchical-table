import React from 'react';
import './style.css';
import BaseTable from './components/HierarchicalTable3';

export default function Hierarchicaltable(props) {
  const { updateData, data, emitOnClick, emitOnChange } = props;
  const value = data.value ?? 0;

  return (<BaseTable  />);
}