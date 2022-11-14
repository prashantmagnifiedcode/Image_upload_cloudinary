import React ,{useState}from "react";
import Box from '@mui/material/Box';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Sidecmp = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpenDrawer(open);
  };
  const list = (anchor) => (
    <>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


    </Box>
    </>
  );
  return (
    <>
 
      <SwipeableDrawer
     anchor={"right"}
     open={isOpenDrawer}
     onClose={toggleDrawer(false)}
     onOpen={toggleDrawer(true)}
   >
    {list("right")}
   </SwipeableDrawer>
    </>
  );
};
export default Sidecmp;
