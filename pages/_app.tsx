import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";
import "@/styles/index.scss";

const AltheaEVM = {
  id: 417834,
  name: "AltheaEVM DevNet",
  network: "AltheaEVM DevNet",
  iconUrl:
    "https://cdn.dorahacks.io/static/files/188c028468557368d12717c46b1bd63e.jpg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "AltheaEVM GAS",
    symbol: "GAS",
  },
  rpcUrls: {
    public: { http: ["https://althea.zone:8545/"] },
    default: { http: ["https://althea.zone:8545/"] },
  },
  blockExplorers: {
    default: { name: "AltheaTrace", url: "https://evm.ngd.network/" },
  },
  testnet: false,
};

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  const { publicClient, chains } = configureChains(
    [AltheaEVM],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Electra",
    projectId: "2588db3d04914636093b01d564610991",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            chains={chains}
            theme={lightTheme({
              accentColor: "#10b981",
              accentColorForeground: "white",
              borderRadius: "medium",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      ) : null}
    </>
  );
}
