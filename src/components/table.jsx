import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Table() {

    const [name, setName] = useState({
        name: 'name',
        surname: 'surname',
        age: 'age'
    });

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell>surname</TableCell>
                            <TableCell>age</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

        </>
    )

}

export { Table };