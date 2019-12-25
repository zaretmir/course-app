import React from 'react';

export interface TableBodyProps {
  data: any[];
  columns: any[];
}

class TableBody extends React.Component<TableBodyProps, {}> {
  renderCell(item: any, column: any) {
    if (column.field) return item[column.field];
    return column.content(item);

    // {item[column.field] || column.content(item)}
  }

  createKey = (item: any, column: any): any => {
    return item.id + (column.field || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
