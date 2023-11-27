import { Outlet } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import Topbar from "../components/Topbar/Topbar";
import navConfig from "./navConfig";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

import { useMediaQuery, useTheme } from "@mui/material";
const APP_BAR_MOBILE = 92;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_DESKTOP + 24,
    [theme.breakpoints.up("lg")]: {
    },
}));

export default function DashboardLayout() {

    const isNonMobile = useMediaQuery("(min-width: 766px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const user = {}
    const theme=useTheme()

    return (
        <>
            <StyledRoot>
                <Topbar
                    isSidebarOpen={isSidebarOpen}
                    isNonMobile={isNonMobile}
                    setIsSidebarOpen={setIsSidebarOpen}
                    drawerWidth="1400px"
                />
                <Nav
                    isNonMobile={isNonMobile}
                    drawerWidth="250px"
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={() => setIsSidebarOpen(false)}
                    navConfig={navConfig}
                />
                <Main style={{
                     backgroundImage: theme.palette.mode === "dark" ? `url(img/gradient_dark.jpg)` : `url(img/gradient.jpg)`,
                     backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed", 
                    backgroundRepeat: "no-repeat",
                    paddingLeft: "40px",
                    paddingRight: "40px"
                }}>
                    <Outlet />
                <Footer/>
                </Main>
            </StyledRoot>
        </>
    );
}
