import type { NextPage } from 'next'
import Head from 'next/head'
import HooverSpringer from '../components/HooverSpringer'
import styles from '../styles/Minter.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HooverSpringer />
      <Head>
        <title>NFT Minter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.form}>
        <button
          className={styles.metamaskBtn}
        >
          <img
            className={styles.metamaskLogo}
            src={'/metamask.webp'} />
        </button>
      </div>
    </div>
  )
}

export default Home
