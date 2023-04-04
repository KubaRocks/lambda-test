import { type AppType } from "next/app";
import LogRocket from "logrocket";

import { api } from "@app/utils/api";

import "@app/styles/globals.css";

LogRocket.init("hrfn4w/lamba-test");
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
