import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  Image,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Box,
  Paper,
  Avatar,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  styled,
} from "@mui/material";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import { ConnectWallet } from "@thirdweb-dev/react";

import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
const StyledMenu = styled((props, colors) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme, colors }) => ({
  "& .MuiPaper-root": {
    backgroundColor: colors.primary[800],
    borderRadius: "8px", // Adjusted border-radius for consistency with your original code
    marginTop: theme.spacing(1),
    padding: "16px", // Adjusted padding for consistency with your original code
    minWidth: 240,
  },
}));

const StyledMenuItem = styled("div")(({ theme, colors }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(72, 92, 165, 0.5)",
    borderRadius: "8px",
  },
  "& .MuiAvatar-root": {
    width: "24px",
    height: "26px",
    marginRight: theme.spacing(1),
    color: colors.primary[100],
  },
  "& .MuiTypography-root": {
    color: colors.primary[300],
  },
}));

const Menus = styled(MenuItem)`
  padding-left: 0px !important;
  padding-top: 20px !important;
`;


const Topbar = ({
  user,
  isSidebarOpen,
  isNonMobile,
  setIsSidebarOpen,
  drawerWidth,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [smartWalletAddress, setSmartWalletAddress] = useState(null);
  const [isIconClicked, setIsIconClicked] = useState(false); // Define isIconClicked state here
  const isLoggedIn = useState(false);


  const iconClickedStyle = {
    transform: isIconClicked ? 'scale(0.8)' : 'scale(1)',
    transition: 'transform 0.3s',
    ml: 2
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    if(user){
    setSmartWalletAddress(user.smartWalletAddress);
    }
  }, []);

 
  const handleOpenWallet = () => {
    // Use the `navigate` function to go to the new "Winnings" page
    navigate("/wallet"); // Replace "/winnings" with the actual route to your "Winnings" page
  };
  const handleOpenProfile = () => {
    // Use the `navigate` function to go to the new "Winnings" page
    navigate("/profile"); // Replace "/winnings" with the actual route to your "Winnings" page
  };

  const openHomePage = async () => {
    navigate("/")
  }
  const handleOpenStaking = async () => {
    navigate("/staking")
  }

  return (
    <AppBar
      sx={{
        position: "fixed", // Make the AppBar fixed at the top
        background: "rgba(255, 255, 255, 0.1)", // Apply background color with opacity when scrolled
        backdropFilter: "blur(10px)", // Apply blur effect when scrolled
        boxShadow: "2", // Add shadow when scrolled
        transition: "background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s", // Add transitions for a smooth effect
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton
            sx={{
              transition: "margin 0.3s ease-in-out", // Add the transition property
            }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuIcon />
          </IconButton>

          <FlexBetween
            borderRadius="9px"
            gap="0rem"
            p="0.1rem 0.1rem"
          >
            <IconButton  onClick={openHomePage} >
              <img src="metakul/logo/darkLogo.png"  style={{height:"50px"}}/>
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween sx={{ gap: isNonMobile ? "1rem" : "0.2rem" }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
           
            <div className="flex justify-between items-center  md:mt-0 lg:mt-0  ">
{/*               <Button
                className=" "
                id="demo-customized-button"
                aria-controls={open}
                aria-haspopup="true"
                aria-expanded={"true"}
                // variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <div className="bg-yankees-blue rounded-3xl items-center  cursor-pointer w-max mr-0 sm:mr-0  ">
                  <div className="h-10 text-xs flex justify-items-end justify-end px-1 py-1 items-center">
                    <div>
                      <Avatar>
                        <img src="img/hero/hero.jpg" />
                      </Avatar>
                    </div>
                  </div>
                </div>
              </Button> */}

{/*               <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                colors={colors}
              >
                <div className="text-gray font-black text-sm tracking-wide pb-9">
                  Hi WEB3 User!
                </div>
            

                <Menus onClick={handleClose} disableRipple
                  sx={{
                      '&:hover': {
                          background: "#1C2438",
                      },
                  }}>
                  <EditIcon />
                  Edit
              </Menus>
                <Paper>
                  <StyledMenuItem colors={colors}>
                    <Avatar>
                      <Person4OutlinedIcon />
                    </Avatar>
                    <Typography onClick={handleOpenProfile}>Profile</Typography>
                  </StyledMenuItem>
                </Paper>
                <Paper>

                  <StyledMenuItem colors={colors}>
                    <Avatar>
                      <RedeemTwoToneIcon />
                    </Avatar>
                    <Typography onClick={handleOpenWallet}>My Wallet</Typography>
                  </StyledMenuItem>

                </Paper>
                <Paper>
                  <StyledMenuItem colors={colors}>
                    <Avatar>
                      <Groups2TwoToneIcon />
                    </Avatar>
                    <Typography onClick={handleOpenStaking}>Earning</Typography>
                  </StyledMenuItem>
                </Paper>

               
              </StyledMenu> */}
            </div>
            <IconButton >
            <ConnectWallet/>
            </IconButton>

        
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
