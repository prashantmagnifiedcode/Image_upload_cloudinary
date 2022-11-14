import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {

  Toolbar,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import Head_Wrap from '../Dashboard/Head_wrap'
const useStyles = makeStyles({
  root: {
    width: "100%",
    padding:0,
    background:"white",
    border:0,
    borderTopRightRadius:"3px",
    borderTopLeftRadius:"3px",
   
  }
});
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
)
 {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ListedProduct() {
  const classes = useStyles();
  return (
    <>
    <Head_Wrap>

    <Toolbar className={classes.root}>
         <div className="flex flex-col w-full">
            <p className="text-sm font-semibold absolute top-2">Pending For Approval</p>

          <TextField
            placeholder="Search by a brand, product name, part number or product ID"
            variant="outlined"
            
            style={{
              width: "100%",
              fontSize: "0.8rem" ,
              marginTop: "2rem",
              
              borderRadius:0,
              

            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{padding:"0px"}}>
                  
                </InputAdornment>
              ),
            }}
          />
            </div>
          <div className="relative  w-48" >
            <p className="text-sm font-semibold absolute top-2">SORT BY</p>
            <Select
              variant="outlined"
              fullWidth
              value="createdAt"
              style={{
                fontSize: "0.8rem" ,
                marginTop: "1.9rem",
                width:"80%"
              }}
          
            >
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="createdAt">
                DATE & TIME
              </MenuItem>
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="slug">
                PRODUCT NAME
              </MenuItem>

              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="quantity">
                QUANTITY
              </MenuItem>
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="price">
                Listed Price (inc. GST)
              </MenuItem>
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="oem">
                BRAND
              </MenuItem>
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="fuelType">
                FUEL TYPE
              </MenuItem>
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="producttype">
                CONDITION
              </MenuItem>
              <MenuItem style={{ fontSize: "0.6rem" ,padding:"12px 13px"}} value="category_slug">
                CATEGORY
              </MenuItem>
            </Select>
          </div>
        </Toolbar>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:"0.8rem"}}>s.no</TableCell>
            <TableCell  style={{fontSize: "0.8rem" }} align="center">Product_ID</TableCell>
            <TableCell  style={{fontSize: "0.8rem" }} align="center"> Product_Name</TableCell>
        
             <TableCell   style={{fontSize: "0.8rem" }} align="center">
              
                &#8377; Listed_Price 
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Quantity
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Part_no.
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Brand
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Category
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Created_at
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Status
              </TableCell>
              <TableCell   style={{fontSize: "0.8rem" }} align="center">
                Action
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="
              center">{row.calories}</TableCell>
              <TableCell align="
              center">{row.fat}</TableCell>
              <TableCell align="
              center">{row.carbs}</TableCell>
              <TableCell align="
              center">{row.protein}</TableCell>
              <TableCell align="
              center">{row.protein}</TableCell>
              <TableCell align="
              center">
                 <button
                        className="bg-custom-green border  sm:mr-2 mt-1 ml-0 md:mt-0 md:ml-2  rounded p-2 w-20 hover:text-custom-green hover:bg-white transition duration-500 tracking-wide text-white text-sm hover:border-custom-green"
                     
                      >
                        UPDATE
                      </button>
                 

                    <button
                      className="bg-custom-green border  sm:mr-2 mt-1 ml-0 md:mt-0 md:ml-2  rounded p-2 w-18 hover:text-custom-green hover:bg-white transition duration-500 tracking-wide text-white text-sm hover:border-custom-green"
                    
                    >
                      VIEW
                    </button>

                    
                      <button className="border p-2 bg-custom-blue hover:text-custom-blue hover:bg-white transition duration-500 rounded w-18 tracking-wide text-white text-sm hover:border-custom-blue">
                        EDIT
                      </button>
                    
                    <button
                      className="bg-custom-red border  sm:mr-2 mt-1 ml-0 md:mt-0 md:ml-2  rounded p-2 w-18 hover:text-custom-red hover:bg-white transition duration-500 tracking-wide text-white text-sm hover:border-custom-red"
                      
                    >
                      DELETE
                    </button>
                </TableCell>
              <TableCell align="
              center"> 
                <label>
                  <select
                    className="bg-blue p-3"
                    name="Status"
                    value="0"
                   
                  >
                    <option value="0">Pending</option>
                    <option value="1">Approved</option>
                    <option value="2">Reject</option>
                  </select>
                </label></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Head_Wrap>
    </>
  );
}
