import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const PensionGrid = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columnDefs:any = [
    { headerName: 'Pension ID', field: 'id' },
    { headerName: 'Plan Name', field: 'plan' },
    { headerName: 'Start Date', field: 'startDate' },
    { headerName: 'Amount', field: 'amount' },
  ];

  const rowData = [
    { id: 'P001', plan: 'RetirePlus', startDate: '2020-01-01', amount: 50000 },
    { id: 'P002', plan: 'SecureLife', startDate: '2021-06-15', amount: 75000 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: '100%' }}>
      <AgGridReact rowData={rowData} />
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />

    </div>
  );
};

export default PensionGrid;