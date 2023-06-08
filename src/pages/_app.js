import "@/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";
import i18n from '/src/i18n';
import { appWithTranslation } from "next-i18next";



const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(App);