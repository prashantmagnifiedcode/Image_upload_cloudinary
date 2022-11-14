import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import Button from '@mui/material/Button';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', "jhdsjkfhjsdfha@gmail", 6.0, 
  "approved", 4.0),
  createData('Ice cream sandwich', 'jhdsjkfhjsdfha@gmail', 9.0,"reject", 4.3),
  createData('Eclair', 
  'jhdsjkfhjsdfha@gmail', 16.0, "pending", 6.0),
  createData('Cupcake', 'jhdsjkfhjsdfha@gmail', 3.7, 67, 4.3),
  createData('Gingerbread', 
  'jhdsjkfhjsdfha@gmail', 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>s.No</TableCell>
            <TableCell align="center">Description of Goal</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Unit</TableCell>
            <TableCell align="center">List Price</TableCell>
            <TableCell align="center">Discount</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell>1</TableCell>
            <TableCell align="center">Description of Goal</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">1</TableCell>
            <TableCell align="center">54212</TableCell>
            <TableCell align="center">45</TableCell>
            <TableCell align="center">200</TableCell>
            <TableCell align="center">100</TableCell>

            </TableRow>
            <TableRow>
            
            <TableCell align="center" colspan={3}></TableCell>
            <TableCell align="center" colspan={3}>Add; CGST</TableCell>
            <TableCell align="center" colsan={2}>@ 9.00%</TableCell>
            <TableCell align="center" >12</TableCell>
           

            </TableRow>
            <TableRow>
            
            <TableCell align="center" colspan={3}></TableCell>
            <TableCell align="center" colspan={3}>Add; SGST</TableCell>
            <TableCell align="center" colsan={2}>@ 9.00%</TableCell>
            <TableCell align="center" >12</TableCell>
           

            </TableRow>
            <TableRow>
            
            
            <TableCell align="center" colspan={6}></TableCell>
            <TableCell align="center" colsan={2}>Total</TableCell>
            <TableCell align="center" >12</TableCell>
           

            </TableRow>
  
        </TableBody>
      </Table>
     
    </TableContainer>
    
  );
}
