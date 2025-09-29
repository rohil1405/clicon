import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/utils/client";
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
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      </Layout>
    </main>
  );
};

export default MyApp;
