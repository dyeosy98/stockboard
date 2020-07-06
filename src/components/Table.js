import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
    height: 30px;
`
const Th = styled.th`
    padding: 10px;
    border: 1px solid black;
`

const Td = styled.td`
    padding: 10px;
    border: 1px solid black;
`

const Table = () => (
    <table>
        <Tr>
            <Th>Stock Name</Th>
            <Th>Stock Quote</Th>
            <Th>Stock Price</Th>
            <Th>PE Ratio</Th>
            <Th>5Y Average Div. Yield</Th>
            <Th>Index</Th>
        </Tr>
        <Tr>
            <Td>example1</Td>
            <Td>example2</Td>
            <Td>example3</Td>
            <Td>example4</Td>
            <Td>example5</Td>
            <Td>example index</Td>
        </Tr>
    </table>
)

export default Table;
