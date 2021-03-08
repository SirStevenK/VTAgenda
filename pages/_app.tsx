import GroupProvider from "@/providers/GroupProvider";
import { wrapper } from "@/store";
import "@/styles/index.css";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <GroupProvider>
      <Component {...pageProps} />
    </GroupProvider>
  );
}

export default wrapper.withRedux(CustomApp);
