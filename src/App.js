import { ColorModeContext, useMode, tokens } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import Routers from "./routes";

const secretKey =
  "JpSxBi9l35njYqaiIIy9CH6JNtj4yXLHxxzEoQrmRp_9SD5JJhFCM37wlelE-8OXz6tKo4fsaiz5pRN5D_lYkw";

const smartWalletOptions = {
  factoryAddress: "0x2ace847964fe70d38ea6dad726e3a230dca244bd",
  gasless: true,
};
// routes

export default function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  // Access the primary color from your theme
  const primaryColor = colors.grey[900];
  const secondaryColor = colors.primary[100];

  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId="ed7a4b64885c72be1dc347066f4e51ce"
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet({ recommended: true }), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(localWallet(), smartWalletOptions),
        smartWallet(
          embeddedWallet({
            auth: {
              options: ["email", "google", "apple", "facebook"],
            },
          }),
          smartWalletOptions
        ),
      ]}
    >
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {/* <Toaster
              position="bottom-right"
              reverseOrder={false}
              toastOptions={{
                style: {
                  border: `1px solid ${primaryColor}`,
                  padding: "16px",
                  backgroundColor: primaryColor,
                  color: secondaryColor,
                },
              }}
            /> */}

            <Router>
              <Routers />
            </Router>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ThirdwebProvider>
  );
}
