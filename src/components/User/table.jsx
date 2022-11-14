import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TablePagination from '@mui/material/TablePagination';
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
          <TableRow  className="font-bold text-gray-600 ">
          
            <TableCell >User </TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            
            >
            
              <TableCell component="th"  >
                <div class="flex  iteams-center">

                   
              <Avatar alt="Remy Sharp" 
       sx={{ width: 35, height: 35 }}
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" >

      </Avatar>
      <div className="flex items-center ml-1">

           <p className=" text-indigo-500 font-sans font-bold"> {row.name}</p>
      </div>
                </div>
                
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">
                  <p className="bg-yellow-500 p-1 rounded-xl inline">

                  {row.carbs}
                  </p>
                  
                  </TableCell>
              <TableCell align="center">
                  
                  

<VisibilityIcon className="text-indigo-500"/>


<DeleteOutlineOutlinedIcon className=" text-red-500"/>


<ModeOutlinedIcon className=" text-green-500"/>
    
                  
                  
                  </TableCell>
               
              
               
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={2}
          page={0}
       
       
        />
    </TableContainer>
    
  );
}
