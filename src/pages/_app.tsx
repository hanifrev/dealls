import "@/styles/globals.scss";
import "@/styles/Index.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import store from "../app/store";
import { api } from "@/app/services/api";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={api}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApiProvider>
  );
}
