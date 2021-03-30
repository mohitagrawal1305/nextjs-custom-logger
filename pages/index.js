import Head from 'next/head'
import { useEffect } from 'react';
import logger from '../helpers/logger'
import styles from '../styles/Home.module.css'

export default function Home() {
  logger('Home');

  useEffect(() => {
    logger('Home mounted');
    return() => {
      logger('Home un-mounted');

    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Next.js Custom Logger
        </h1>

        <div className={styles.grid}>
        {
          global.isLogsEnabled ? (
            <a href="/" className={styles.disable}>
            <p>Click here to disable logging</p>
          </a>
          ) : (
            <a href="/?debug=true" className={styles.enable}>
            <p>Click here to enable logging</p>
          </a>
          )
        }
          
        </div>

        {
          global.isLogsEnabled && (
            <p> Please open dev tools to see custom logs </p>
          )
        }
        
      </main>

     
    </div>
  )
}
