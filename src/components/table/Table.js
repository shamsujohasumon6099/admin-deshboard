import React from 'react';
import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {

    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20210415/Nitro-5-AN517-54-Bl_modelpreview.png",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delevery",
            status: "Approved",
        },
        {
            id: 2143357,
            product: "Asus mode",
            img: "https://www.notebookcheck.net/uploads/tx_nbc2/ASUS_D509DA-BR128_01.jpg",
            customer: "Dairl Wilson",
            date: "34 June",
            amount: 834,
            method: "Online",
            status: "Pending",
        },
        {
            id: 6543155,
            product: "Hp Women",
            img: "https://www.notebookcheck.net/fileadmin/Notebooks/HP/15s-fq1556ng/HP_15s_fq_teaser.png",
            customer: "Will Smith",
            date: "9 March",
            amount: 1289,
            method: "Cash on Delevery",
            status: "Pending",
        },
        {
            id: 3453176,
            product: "MacBook Air",
            img: "https://cdn.mos.cms.futurecdn.net/EXVWoCqF6RUykSaord54VS.jpg",
            customer: "David Prime",
            date: "6 January",
            amount: 1640,
            method: "Online",
            status: "Approved",
        },
        {
            id: 1143155,
            product: "Lenevo Nitro",
            img: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-amd-subseries-hero.png?context=bWFzdGVyfHJvb3R8Njk5NTh8aW1hZ2UvcG5nfGhlYi9oMDMvMTA3NDQ5NjM5ODk1MzQucG5nfGM1NzlhZGQyNjU2OGVmN2Q2ZGViYWU4NTJlYTZhYzgxMmYyZjVkNTdiMTI2Mjg1ZWMzOWVhZDUzN2ViYmQwZTk",
            customer: "Jonson Smith",
            date: "23 June",
            amount: 675,
            method: "Cash on Delevery",
            status: "Pending",
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tabelCell">Tracking ID</TableCell>
                        <TableCell className="tabelCell">Product</TableCell>
                        <TableCell className="tabelCell">Customer</TableCell>
                        <TableCell className="tabelCell">Date</TableCell>
                        <TableCell className="tabelCell">Amount</TableCell>
                        <TableCell className="tabelCell">Payment Method</TableCell>
                        <TableCell className="tabelCell">Status</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} >
                            <TableCell className="tabelCell">{row.id} </TableCell>
                            <TableCell className="tabelCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tabelCell">{row.customer}</TableCell>
                            <TableCell className="tabelCell">{row.date}</TableCell>
                            <TableCell className="tabelCell">{row.amount}</TableCell>
                            <TableCell className="tabelCell">{row.method}</TableCell>
                            <TableCell className={`tabelCell ${row.status}`}>
                                <span className="status">{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;