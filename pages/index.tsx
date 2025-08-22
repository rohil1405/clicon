import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${inter.variable} ${roboto.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
};

export default MyApp;
