import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
interface LogEntry {
  id: number;

  request_type: string;
  createdAt: string; // Assuming createdAt is a string representing a date
}

export default function LogsTable({ rows }: { rows: LogEntry[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ><b>id</b></TableCell>
            <TableCell ><b>request_type</b></TableCell>
            <TableCell ><b>createdAt</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.id}</TableCell>

              <TableCell >{row.request_type}</TableCell>
              <TableCell >{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
