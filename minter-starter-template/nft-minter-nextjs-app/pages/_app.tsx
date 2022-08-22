import "../styles/globals.css";
import type { AppProps } from 'next/app'

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;