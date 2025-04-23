import React, { createContext, useContext } from "react";
import { Space, Table, Tag } from "antd";
import { TableRowSelection } from "antd/es/table/interface";

var TableContext = (createContext < TableContextType) | (null > null);
export const useTable = () => useContext(TableContext);

export default function AppDataTable({ refreshData, ...props }) {
  return (
    <TableContext.Provider value={{ refreshData }}>
      <Table
        rowSelection={props.rowSelection}
        rowKey={props.rowKey}
        columns={props.columns}
        dataSource={props.data}
      />
    </TableContext.Provider>
  );
}