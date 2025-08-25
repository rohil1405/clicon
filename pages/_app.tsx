import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${outfit.variable}`}>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </main>
  );
};

export default MyApp;
