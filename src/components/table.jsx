// import { useState, useEffect } from 'react';
//import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableProject() {

    const createData = (name, surname, age) => {
        return { name, surname, age };
    }
    const rows = [
        createData('Jean', 'DUPONT', 15),
        createData('Jean', 'DUPONT', 16),
        createData('Jean', 'DUPONT', 15)
    ];

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.surname}</TableCell>
                                <TableCell>{row.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )

}

export { TableProject };