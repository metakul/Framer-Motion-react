import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
// hooks
import Scrollbar from "../scrollbar/Scrollbar";

import UserInfo from "./UserInfo";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function Nav({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  navConfig,
}) {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen();
    }
  }, [pathname]);


  return (
    <>
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
      }}
      marginRight={isNonMobile && isSidebarOpen ? `${drawerWidth}` : `0`}
    >
      {isNonMobile ? (
       <Drawer
       open={isSidebarOpen}
       onClose={setIsSidebarOpen}
       variant="persistent"
       ModalProps={{
         keepMounted: false,
       }}
       PaperProps={{
         sx: {
           width: drawerWidth,
           // borderRightStyle: "dashed",
           backgroundColor:colors.primary[900],
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           marginTop: "75px",
           borderRadius: 4,
           paddingBottom:"40px"
         },
       }}
     >
       <Scrollbar>
         <Box width="100%">
           <FlexBetween color={colors.secondary.main}>
             <UserInfo
               profileImage="img/hero/hero.jpg"
               colors={colors}
               setIsSidebarOpen={setIsSidebarOpen}
               isSidebarOpen={isSidebarOpen}
             />
           </FlexBetween>
           <Divider color={colors.secondary[100]} />

           <List>
             {navConfig.map(({ text, icon, to }) => {
               if (!icon) {
                 return (
                   <Typography
                     key={text}
                     sx={{ m: "2.25rem 0 1rem 3rem" }}
                   >
                     {text}
                   </Typography>
                 );
               }
               const lcText = to.toLowerCase();

               return (
                 <ListItem key={text} disablePadding>
                   <ListItemButton
                     onClick={() => {
                       navigate(`/${lcText}`);
                       setActive(lcText);
                     }}
                     sx={{
                       backgroundColor:
                         active === lcText
                           ? colors.secondary[900]
                           : "transparent",
                       color:
                         active === lcText
                           ? colors.secondary[200]
                           : colors.secondary[100],
                     }}
                   >
                     <ListItemIcon
                       sx={{
                         color:
                           active === lcText
                             ? colors.primary[600]
                             : colors.secondary[200],
                       }}
                     >
                       {icon}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                     {active === lcText && (
                       <ChevronRightOutlined sx={{ ml: "auto" }} />
                     )}
                   </ListItemButton>
                 </ListItem>
               );
             })}
           </List>
           
           <Divider color={colors.secondary[100]} />

         </Box>
    
       </Scrollbar>
     </Drawer>
      ) : (
        <Drawer
          open={isSidebarOpen}
          onClose={setIsSidebarOpen}
          ModalProps={{
            keepMounted: false,
          }}
          PaperProps={{
            sx: {
              width: drawerWidth,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "85px",
              borderRadius: 4,
              height: "85%",
              paddingBottom:"40px"

            },
          }}
        >
          <Scrollbar>
               <Box width="100%">
                 <FlexBetween color={colors.secondary.main}>
                   <UserInfo
                     profileImage="img/hero/hero.jpg"
                     colors={colors}
                     setIsSidebarOpen={setIsSidebarOpen}
                     isSidebarOpen={isSidebarOpen}
                   />
                 </FlexBetween>
                 <Divider color={colors.secondary[100]} />

                 <List>
                   {navConfig.map(({ text, icon, to }) => {
                     if (!icon) {
                       return (
                         <Typography
                           key={text}
                           sx={{ m: "2.25rem 0 1rem 3rem" }}
                         >
                           {text}
                         </Typography>
                       );
                     }
                     const lcText = to.toLowerCase();
 
                     return (
                       <ListItem key={text} disablePadding>
                         <ListItemButton
                           onClick={() => {
                             navigate(`/${lcText}`);
                             setActive(lcText);
                           }}
                           sx={{
                             backgroundColor:
                               active === lcText
                                 ? colors.secondary[900]
                                 : "transparent",
                             color:
                               active === lcText
                                 ? colors.secondary[200]
                                 : colors.secondary[100],
                           }}
                         >
                           <ListItemIcon
                             sx={{
                               ml: "2rem",
                               color:
                                 active === lcText
                                   ? colors.primary[600]
                                   : colors.secondary[200],
                             }}
                           >
                             {icon}
                           </ListItemIcon>
                           <ListItemText primary={text} />
                           {active === lcText && (
                             <ChevronRightOutlined sx={{ ml: "auto" }} />
                           )}
                         </ListItemButton>
                       </ListItem>
                     );
                   })}
                 </List>
                 
           <Divider color={colors.secondary[100]} />

               </Box>
          
          </Scrollbar>
        </Drawer>
      )}
    </Box>
  </>
);
}
