
import { Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';


const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`


const ProductDetail = ({ product }) => {
 const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    return (
        <>
            <Typography>Available offers</Typography>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;