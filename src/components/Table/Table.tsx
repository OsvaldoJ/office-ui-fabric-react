import * as React from 'react';

export interface ITableProps {
}

export default class Table extends React.Component<ITableProps, any> {
  render() {
    let rootClass = 'ms-Table';

    return (
      <div className={ rootClass }>
      </div>
    );
  }
}