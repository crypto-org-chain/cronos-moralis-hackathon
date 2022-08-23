import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import HooverSpringer from '../components/HooverSpringer';
import styles from '../styles/Minter.module.css';

const Home: React.FC = (): JSX.Element => {

  // variables
  const { authenticate, isAuthenticated } = useMoralis();
  const router = useRouter();

  // authentication
  useEffect(() => {
    if (isAuthenticated) router.push('/minter');
  }, [isAuthenticated]);

  return (
    <div className={styles.container}>
      <HooverSpringer />
      <Head>
        <title>NFT Minter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.form}>
        <button
          onClick={() => authenticate()}
          className={styles.metamaskBtn}
        >
          <img
            className={styles.metamaskLogo}
            src={'/metamask.webp'} />
        </button>
      </div>
    </div>
  );
}

export default Home;
