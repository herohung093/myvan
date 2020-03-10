import * as React from "react";
type TableProps = {
  listOfHeader: String[];
};
const TableHeader: React.FC<TableProps> = props => {
  return (
    <thead>
      <tr>
        {props.listOfHeader.map(item => {
          return <th key={Math.random()}>{item}</th>;
        })}
      </tr>
    </thead>
  );
};
export default TableHeader;
