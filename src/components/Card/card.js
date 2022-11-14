import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Avatar from '@mui/material/Avatar';
export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card className=" card containers_css flex-row sm:w-full  md:h-[15%] md:p-4 "  >
      
       <div  >

           <h1 className="uppercase font-bold mb-3 text-indigo-500">Prashant</h1>
           <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur amet aspernatur ipsam!
           </p>
       </div>

     
      
      <Avatar
  alt="Remy Sharp"
  src="https://i.ytimg.com/vi/WV_0WylRdNo/maxresdefault.jpg"
  sx={{ width:120, height:120}}
/>
    </Card>
  );
}
