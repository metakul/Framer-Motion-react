import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
  } from "@mui/icons-material";

export const navConfig = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
      to: "",
    },
    {
      text: "Into the Metaverse",
      icon: null,
      to: "",
    },
    // {
    //   text: "My Wallet",
    //   icon: <TodayOutlined />,
    //   to: "wallet",
    // },
    {
      text: "Claim NFT",
      icon: <ShoppingCartOutlined />,
      to: "metakul",
    },
    {
      text: "Earn With Nft",
      icon: <PieChartOutlined />,
      to: "Staking",
    },
    // {
    //   text: "Metaverse",
    //   icon: null,
    //   to: "",
    // },
    {
      text: "Learn Web3",
      icon: <ReceiptLongOutlined />,
      to: "blogs",
    },

    {
      text: "Extras",
      icon:null,
      to: "",
    },
    {
      text: "Profile",
      icon: <AdminPanelSettingsOutlined />,
      to: "Profile",
    },
    {
      text: "KYC",
      icon: <PublicOutlined />,
      to: "kyc",
    },
    {
      text: "Career",
      icon: <CalendarMonthOutlined />,
      to: "Career",
    },
    
  ];

  export default navConfig;
