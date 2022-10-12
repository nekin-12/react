import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableProject() {

    const [item, setItem] = useState([])

    const callApi = () => {
    fetch('https://api.randomuser.me/')
        .then((response) => console.log(response.json()))
            // .then((item) => setItem(item.all))
        .catch((error) => console.log(error));
    }
        


    useEffect(() => {
        callApi()
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow className={callApi}>
                            <TableCell>id</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell >{item}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
             
        </>
    )

}

export { TableProject };