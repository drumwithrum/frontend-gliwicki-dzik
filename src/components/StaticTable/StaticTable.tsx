import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';

interface StaticTableProps {
  rows: any[];
  headers: string [];
}

class StaticTable extends React.Component<StaticTableProps, any> {
  public renderHeaders(): JSX.Element[] {
    const {headers} = this.props;
    return headers.map((elem: string) => {
      return (
        <TableCell key={elem}>
          {elem}
        </TableCell>
      );
    });
  }

  public renderRows(): JSX.Element[] {
    const {rows} = this.props;
    return rows.map((elem: any, index: number) => {
      return (
        <TableRow key={elem.id}>
          {Object.values(elem).map((values: any, index: number) => {
            return <TableCell key={`${values}-${index}`}>{values}</TableCell>;
          })}
        </TableRow>
      );
    });
  }

  public render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {this.renderHeaders()}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderRows()}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default StaticTable;
