import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import { Inter, Open_Sans } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${inter.variable} ${openSans.variable}`}>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </main>
  );
};

export default MyApp;
