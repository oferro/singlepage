// src/components/basic.table.js
import React from "react";

import { useTable } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicTable ({data}) {

    const columns = [
            {
                Header: 'Name',
                accessor: 'name',
            },{
                Header: 'Birth Date',
                accessor: 'birth_year',
            },{
                Header: 'Gender',
                accessor: 'gender',
            },
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });
    
    return (
        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default BasicTable;
    
    